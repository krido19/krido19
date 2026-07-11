const fs = require('fs');
const imgBuffer = fs.readFileSync('logo copy.png');
const base64Img = imgBuffer.toString('base64');
const imgSrc = `data:image/png;base64,${base64Img}`;

const textData = [
  { section: 'ABOUT ME', color: '#FBBF24' },
  { k: 'Developer', v: 'Full Stack Web &amp; Mobile' },
  { k: 'Project', v: 'Founder of Nineteen Dev' },
  { k: 'Uptime', v: '24/7 (Always Learning)' },
  { k: 'IDE', v: 'VS Code' },
  { spacer: true },
  { section: 'TECH STACK', color: '#34D399' },
  { k: 'Languages', v: 'JavaScript, TypeScript, SQL' },
  { k: 'Frontend', v: 'React, Next.js, HTML, CSS' },
  { k: 'Backend', v: 'Node.js' },
  { spacer: true },
  { section: 'CONNECT', color: '#F472B6' },
  { k: 'Email', v: 'hello@nineteen.dev' },
  { k: 'GitHub', v: '@krido19' },
  { k: 'LinkedIn', v: 'in/kridodev' },
  { k: 'Blog', v: 'nineteen-dev.vercel.app/blog' }
];

let currentY = 90;
let textElements = textData.map(item => {
  if (item.section) {
    const y = currentY;
    currentY += 45;
    const pillWidth = item.section.length * 10 + 24;
    return `
      <!-- Section Shadow -->
      <rect x="382" y="${y - 18 + 3}" width="${pillWidth}" height="28" rx="14" fill="#1E293B" />
      <!-- Section Background -->
      <rect x="380" y="${y - 18}" width="${pillWidth}" height="28" rx="14" fill="${item.color}" stroke="#1E293B" stroke-width="2" />
      <text x="${380 + pillWidth/2}" y="${y + 2}" class="section-title" text-anchor="middle">${item.section}</text>
    `;
  } else if (item.spacer) {
    currentY += 15;
    return '';
  } else if (item.k) {
    const y = currentY;
    currentY += 32;
    return `
      <text x="380" y="${y}" class="key">${item.k}</text>
      <text x="500" y="${y}" class="value">${item.v}</text>
    `;
  }
}).join('\n');

const svg = `<svg width="950" height="550" viewBox="0 0 950 550" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    /* GitHub camo proxy might strip fonts, so we use safe fallbacks */
    .section-title { font-family: 'Outfit', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif; font-size: 14px; font-weight: 800; fill: #1E293B; letter-spacing: 1px; }
    .key { font-family: 'Outfit', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif; font-size: 17px; font-weight: 800; fill: #1E293B; }
    .value { font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif; font-size: 17px; font-weight: 500; fill: #64748B; }
    .header-name { font-family: 'Outfit', system-ui, sans-serif; font-size: 28px; font-weight: 800; fill: #1E293B; }
  </style>

  <!-- Card Shadow -->
  <rect x="16" y="16" width="918" height="518" rx="24" fill="#1E293B" />
  
  <!-- Main Card -->
  <rect x="8" y="8" width="918" height="518" rx="24" fill="#FFFDF5" stroke="#1E293B" stroke-width="4" />
  
  <!-- Memphis Decor: Dots Grid Background Pattern -->
  <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
    <circle cx="2" cy="2" r="2" fill="#CBD5E1" opacity="0.5" />
  </pattern>
  <rect x="10" y="10" width="914" height="514" rx="22" fill="url(#dots)" />

  <!-- Memphis Decor: Floating Shapes -->
  <circle cx="850" cy="80" r="18" fill="#F472B6" stroke="#1E293B" stroke-width="3" />
  <circle cx="853" cy="83" r="18" fill="none" stroke="#1E293B" stroke-width="3" opacity="0.3" /> <!-- offset shadow -->
  
  <rect x="800" y="450" width="30" height="30" fill="#8B5CF6" stroke="#1E293B" stroke-width="3" transform="rotate(15 815 465)" />
  
  <path d="M 380 40 Q 400 20 420 40 T 460 40" fill="none" stroke="#34D399" stroke-width="4" stroke-linecap="round" />
  <path d="M 750 150 L 780 180 M 780 150 L 750 180" stroke="#FBBF24" stroke-width="4" stroke-linecap="round" />
  <path d="M 450 480 L 480 510 M 480 480 L 450 510" stroke="#F472B6" stroke-width="4" stroke-linecap="round" />

  <!-- Avatar Area (Left Side) -->
  <rect x="44" y="129" width="300" height="300" rx="150" fill="#1E293B" />
  <clipPath id="imgClip">
    <rect x="40" y="125" width="300" height="300" rx="150" />
  </clipPath>
  <!-- Background circle in case image is transparent -->
  <rect x="40" y="125" width="300" height="300" rx="150" fill="#FBBF24" stroke="#1E293B" stroke-width="4" />
  <image href="${imgSrc}" x="40" y="125" width="300" height="300" clip-path="url(#imgClip)" />
  <rect x="40" y="125" width="300" height="300" rx="150" fill="none" stroke="#1E293B" stroke-width="4" />

  <!-- Avatar Badge (The 'Hello' Sticker) -->
  <rect x="233" y="373" width="90" height="40" rx="20" fill="#1E293B" transform="rotate(-10 275 390)" />
  <rect x="230" y="370" width="90" height="40" rx="20" fill="#8B5CF6" stroke="#1E293B" stroke-width="3" transform="rotate(-10 275 390)" />
  <text x="275" y="396" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#FFFFFF" text-anchor="middle" transform="rotate(-10 275 390)">HI THERE!</text>

  <!-- Dynamic Text Data -->
${textElements}

</svg>`;

fs.writeFileSync('profile.svg', svg);
console.log('Playful Geometric SVG created successfully!');
