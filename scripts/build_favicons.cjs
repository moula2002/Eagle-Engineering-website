const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function buildProductionFavicons() {
  const publicDir = path.resolve(__dirname, '..', 'public');
  
  // 1. Get trimmed clean eagle
  const eagle = await sharp(path.join(publicDir, 'clean_eagle.png')).trim().toBuffer({ resolveWithObject: true });
  console.log('Eagle trimmed dimensions:', eagle.info.width, 'x', eagle.info.height);

  // 2. Base 512x512 Master Badge
  // Modern squircle with soft gradient, crisp border, and subtle inner glow
  const badgeSvg = Buffer.from(`
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="100%" stop-color="#f8fafc"/>
        </linearGradient>
        <linearGradient id="strokeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#cbd5e1"/>
          <stop offset="100%" stop-color="#94a3b8"/>
        </linearGradient>
      </defs>
      <!-- Base squircle -->
      <rect x="12" y="12" width="488" height="488" rx="112" fill="url(#bg)" stroke="url(#strokeGrad)" stroke-width="10"/>
    </svg>
  `);

  // Eagle sized nicely: 410px wide inside 512px canvas (fills ~80% of width for punchy visibility)
  const eagleScaled = await sharp(eagle.data)
    .resize(410, 410, { fit: 'inside' })
    .toBuffer();

  const masterBadge512 = await sharp(badgeSvg)
    .composite([{ input: eagleScaled, gravity: 'center' }])
    .png()
    .toBuffer();

  // Save master 512x512
  fs.writeFileSync(path.join(publicDir, 'android-chrome-512x512.png'), masterBadge512);

  // 192x192
  await sharp(masterBadge512)
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, 'android-chrome-192x192.png'));

  // Apple touch icon 180x180
  await sharp(masterBadge512)
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));

  // 48x48
  const p48 = await sharp(masterBadge512)
    .resize(48, 48)
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon-48x48.png'), p48);

  // 32x32
  const p32 = await sharp(masterBadge512)
    .resize(32, 32)
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon-32x32.png'), p32);

  // 16x16
  const p16 = await sharp(masterBadge512)
    .resize(16, 16)
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon-16x16.png'), p16);

  // Standard favicon.png (32x32)
  fs.writeFileSync(path.join(publicDir, 'favicon.png'), p32);

  // Also encode master badge as inline base64 in SVG for crisp vector rendering in modern browsers!
  const base64Png = masterBadge512.toString('base64');
  const svgFavicon = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <image width="64" height="64" xlink:href="data:image/png;base64,${base64Png}"/>
</svg>
`;
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgFavicon.trim());

  // Create favicon.ico (We can write a standard multi-image ICO file: 16x16, 32x32, 48x48)
  function createIco(images) {
    // ICO header: 6 bytes
    // Directory entries: 16 bytes each
    // Then image PNG data buffers
    const numImages = images.length;
    const header = Buffer.alloc(6);
    header.writeUInt16LE(0, 0); // Reserved
    header.writeUInt16LE(1, 2); // 1 = ICO type
    header.writeUInt16LE(numImages, 4);

    let offset = 6 + (16 * numImages);
    const dirEntries = [];
    for (const img of images) {
      const entry = Buffer.alloc(16);
      entry.writeUInt8(img.width >= 256 ? 0 : img.width, 0);
      entry.writeUInt8(img.height >= 256 ? 0 : img.height, 1);
      entry.writeUInt8(0, 2); // Colors (0 = no palette)
      entry.writeUInt8(0, 3); // Reserved
      entry.writeUInt16LE(1, 4); // Color planes
      entry.writeUInt16LE(32, 6); // Bits per pixel
      entry.writeUInt32LE(img.buffer.length, 8); // Image data size
      entry.writeUInt32LE(offset, 12); // Offset
      dirEntries.push(entry);
      offset += img.buffer.length;
    }

    return Buffer.concat([
      header,
      ...dirEntries,
      ...images.map(img => img.buffer)
    ]);
  }

  const icoBuffer = createIco([
    { width: 16, height: 16, buffer: p16 },
    { width: 32, height: 32, buffer: p32 },
    { width: 48, height: 48, buffer: p48 }
  ]);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);

  // Create webmanifest
  const webmanifest = {
    name: "Eagle Engineering",
    short_name: "Eagle Eng",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    theme_color: "#0b2545",
    background_color: "#ffffff",
    display: "standalone"
  };
  fs.writeFileSync(path.join(publicDir, 'site.webmanifest'), JSON.stringify(webmanifest, null, 2));

  console.log('All production favicon assets generated successfully!');
}

buildProductionFavicons().catch(console.error);
