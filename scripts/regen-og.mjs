// Regenerate the social share card on the neutral theme (blue as atmosphere, not field).
import sharp from "sharp";
import { statSync } from "node:fs";

const SRC = "/home/z/my-project/upload/pasted_image_1791496072242.png";

const ogSvg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="blue" cx="50%" cy="42%" r="62%">
      <stop offset="0%" stop-color="rgb(1,24,107)" stop-opacity="0.72"/>
      <stop offset="55%" stop-color="rgb(1,24,107)" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="rgb(1,24,107)" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="ember" cx="50%" cy="88%" r="45%">
      <stop offset="0%" stop-color="#ff5a2c" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#ff5a2c" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#060607"/>
  <rect width="1200" height="630" fill="url(#blue)"/>
  <rect width="1200" height="630" fill="url(#ember)"/>
</svg>`;

const base = sharp(Buffer.from(ogSvg));
const logo = await sharp(SRC).resize(330, 330).png().toBuffer();
await base.composite([{ input: logo, top: 150, left: 435 }]).png().toFile("/home/z/my-project/public/media/og-dhumketux.png");
console.log("og-dhumketux.png", statSync("/home/z/my-project/public/media/og-dhumketux.png").size, "bytes");
