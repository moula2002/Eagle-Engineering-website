const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateComparison() {
  const publicDir = path.resolve(__dirname, '..', 'public');
  const eagle = await sharp(path.join(publicDir, 'clean_eagle.png')).trim().toBuffer();

  // Create badge SVG (White squircle badge, very clean, Apple/Chrome style)
  const whiteSquircle = Buffer.from(`
    <svg width="256" height="256" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="100%" stop-color="#f8fafc"/>
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="240" height="240" rx="56" fill="url(#bg)" stroke="#0b2545" stroke-width="6" stroke-opacity="0.15"/>
    </svg>
  `);

  // Resize eagle for badge (filling nicely, centered)
  const eagleOnBadge = await sharp(eagle).resize(195, 195, { fit: 'inside' }).toBuffer();
  const badge256 = await sharp(whiteSquircle).composite([{ input: eagleOnBadge, gravity: 'center' }]).png().toBuffer();

  // Transparent eagle centered in 256x256
  const transparent256 = await sharp(eagle)
    .resize(230, 230, { fit: 'inside' })
    .extend({
      top: 13, bottom: 13, left: 13, right: 13,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .resize(256, 256)
    .png()
    .toBuffer();

  // Make 32x32 and 16x16
  const badge32 = await sharp(badge256).resize(32, 32).png().toBuffer();
  const badge16 = await sharp(badge256).resize(16, 16).png().toBuffer();
  const trans32 = await sharp(transparent256).resize(32, 32).png().toBuffer();
  const trans16 = await sharp(transparent256).resize(16, 16).png().toBuffer();

  // Create a preview image simulating real browser tabs (Light tab and Dark tab)
  const previewSvg = Buffer.from(`
    <svg width="840" height="420" viewBox="0 0 840 420" xmlns="http://www.w3.org/2000/svg">
      <rect width="840" height="420" fill="#0f172a"/>
      <text x="420" y="45" text-anchor="middle" fill="#f8fafc" font-family="Arial, sans-serif" font-size="20" font-weight="bold">Eagle Engineering — Browser Tab Favicon Comparison</text>
      
      <!-- Light Tab Simulation Row -->
      <rect x="40" y="75" width="760" height="150" rx="12" fill="#e2e8f0"/>
      <text x="60" y="105" fill="#334155" font-family="Arial, sans-serif" font-size="14" font-weight="bold">LIGHT BROWSER THEME (Default Chrome / Windows)</text>
      
      <!-- Dark Tab Simulation Row -->
      <rect x="40" y="240" width="760" height="150" rx="12" fill="#1e293b"/>
      <text x="60" y="270" fill="#94a3b8" font-family="Arial, sans-serif" font-size="14" font-weight="bold">DARK BROWSER THEME (Dark Mode Chrome / Edge)</text>
      
      <!-- Tab Mockups Light -->
      <!-- Tab 1: Transparent -->
      <rect x="60" y="125" width="220" height="42" rx="8" fill="#ffffff" stroke="#cbd5e1"/>
      <text x="110" y="151" fill="#1e293b" font-family="Arial, sans-serif" font-size="13">Eagle Engineering</text>
      
      <!-- Tab 2: White Badge -->
      <rect x="300" y="125" width="220" height="42" rx="8" fill="#ffffff" stroke="#cbd5e1"/>
      <text x="350" y="151" fill="#1e293b" font-family="Arial, sans-serif" font-size="13">Eagle Engineering</text>

      <!-- Labels -->
      <text x="170" y="195" text-anchor="middle" fill="#64748b" font-family="Arial, sans-serif" font-size="12" font-weight="bold">Option A: Transparent Red Eagle</text>
      <text x="410" y="195" text-anchor="middle" fill="#0b2545" font-family="Arial, sans-serif" font-size="12" font-weight="bold">Option B: Premium Squircle Badge</text>

      <!-- Tab Mockups Dark -->
      <!-- Tab 1: Transparent Dark -->
      <rect x="60" y="290" width="220" height="42" rx="8" fill="#334155"/>
      <text x="110" y="316" fill="#f8fafc" font-family="Arial, sans-serif" font-size="13">Eagle Engineering</text>

      <!-- Tab 2: White Badge Dark -->
      <rect x="300" y="290" width="220" height="42" rx="8" fill="#334155"/>
      <text x="350" y="316" fill="#f8fafc" font-family="Arial, sans-serif" font-size="13">Eagle Engineering</text>

      <text x="170" y="360" text-anchor="middle" fill="#94a3b8" font-family="Arial, sans-serif" font-size="12" font-weight="bold">Option A: Transparent Red Eagle</text>
      <text x="410" y="360" text-anchor="middle" fill="#38bdf8" font-family="Arial, sans-serif" font-size="12" font-weight="bold">Option B: Premium Squircle Badge</text>
    </svg>
  `);

  const preview = await sharp(previewSvg)
    .composite([
      // Light tab transparent (20x20)
      { input: await sharp(trans32).resize(20, 20).toBuffer(), left: 78, top: 136 },
      // Light tab badge (20x20)
      { input: await sharp(badge32).resize(20, 20).toBuffer(), left: 318, top: 136 },
      // Dark tab transparent (20x20)
      { input: await sharp(trans32).resize(20, 20).toBuffer(), left: 78, top: 301 },
      // Dark tab badge (20x20)
      { input: await sharp(badge32).resize(20, 20).toBuffer(), left: 318, top: 301 },
      // Large previews (80x80) on right side
      { input: await sharp(transparent256).resize(80, 80).png().toBuffer(), left: 560, top: 115 },
      { input: await sharp(badge256).resize(80, 80).png().toBuffer(), left: 670, top: 115 },
      { input: await sharp(transparent256).resize(80, 80).png().toBuffer(), left: 560, top: 280 },
      { input: await sharp(badge256).resize(80, 80).png().toBuffer(), left: 670, top: 280 },
    ])
    .png()
    .toFile(path.join(publicDir, 'preview_comparison.png'));

  console.log('Comparison preview generated successfully!');
}

generateComparison().catch(console.error);
