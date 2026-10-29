const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function testFavicons() {
  const publicDir = path.resolve(__dirname, '..', 'public');

  // First, extract the eagle with clean bounds
  const eagleExtract = await sharp(path.join(publicDir, 'logo_new.png'))
    .extract({ left: 0, top: 0, width: 350, height: 245 })
    .toBuffer();

  // Trim transparent boundaries
  const trimmed = await sharp(eagleExtract)
    .trim({ threshold: 10 })
    .toBuffer({ resolveWithObject: true });

  console.log('Trimmed eagle size:', trimmed.info.width, 'x', trimmed.info.height);

  // Variant 1: Pure transparent eagle, centered in square canvas
  const eagleTransparent512 = await sharp(trimmed.data)
    .resize(460, 460, { fit: 'inside' })
    .extend({
      top: 26, bottom: 26, left: 26, right: 26,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .resize(512, 512)
    .png()
    .toBuffer();

  // Variant 2: Clean white rounded-squircle badge with subtle border & depth
  // Squircle with subtle brand blue/grey border and soft shadow
  const whiteBadgeSvg = Buffer.from(`
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="whiteGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="100%" stop-color="#f8fafc"/>
        </linearGradient>
      </defs>
      <rect x="16" y="16" width="480" height="480" rx="108" fill="url(#whiteGrad)" stroke="#e2e8f0" stroke-width="8"/>
    </svg>
  `);

  const eagleOnBadge = await sharp(trimmed.data)
    .resize(390, 390, { fit: 'inside' })
    .toBuffer();

  const v2Badge = await sharp(whiteBadgeSvg)
    .composite([{ input: eagleOnBadge, gravity: 'center' }])
    .png()
    .toBuffer();

  // Variant 3: Deep Brand Navy badge (#0B2545) with Red Eagle
  const navyBadgeSvg = Buffer.from(`
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="navyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0e2a4d"/>
          <stop offset="100%" stop-color="#07182c"/>
        </linearGradient>
      </defs>
      <rect x="16" y="16" width="480" height="480" rx="108" fill="url(#navyGrad)" stroke="#1e3a5f" stroke-width="8"/>
    </svg>
  `);

  const v3NavyBadge = await sharp(navyBadgeSvg)
    .composite([{ input: eagleOnBadge, gravity: 'center' }])
    .png()
    .toBuffer();

  // Variant 4: Crisp Circular White Badge with red accent ring
  const circleBadgeSvg = Buffer.from(`
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="circleGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="100%" stop-color="#f1f5f9"/>
        </linearGradient>
      </defs>
      <circle cx="256" cy="256" r="236" fill="url(#circleGrad)" stroke="#e62020" stroke-width="12"/>
    </svg>
  `);

  const v4CircleBadge = await sharp(circleBadgeSvg)
    .composite([{ input: eagleOnBadge, gravity: 'center' }])
    .png()
    .toBuffer();

  fs.writeFileSync(path.join(publicDir, 'v1_transparent.png'), eagleTransparent512);
  fs.writeFileSync(path.join(publicDir, 'v2_white_badge.png'), v2Badge);
  fs.writeFileSync(path.join(publicDir, 'v3_navy_badge.png'), v3NavyBadge);
  fs.writeFileSync(path.join(publicDir, 'v4_circle_badge.png'), v4CircleBadge);

  console.log('Generated variants 1, 2, 3, 4 at 512x512!');
}

testFavicons().catch(console.error);
