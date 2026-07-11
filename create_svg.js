const fs = require('fs');
const imgBuffer = fs.readFileSync('logo copy.png');
const base64Img = imgBuffer.toString('base64');
const imgSrc = `data:image/png;base64,${base64Img}`;

// We will use 20px line height
const lines = [
  [{c: 'title', t: 'krido19@github ---------------------------------------'}],
  [{c: 'dots', t: '. '}, {c: 'key', t: 'OS:'}, {c: 'dots', t: ' ............................ '}, {c: 'value', t: 'Windows, macOS, shell'}],
  [{c: 'dots', t: '. '}, {c: 'key', t: 'Uptime:'}, {c: 'dots', t: ' ........................ '}, {c: 'value', t: '24/7 (Always Learning)'}],
  [{c: 'dots', t: '. '}, {c: 'key', t: 'Expertise:'}, {c: 'dots', t: ' ..................... '}, {c: 'value', t: 'Web & Mobile Development'}],
  [{c: 'dots', t: '. '}, {c: 'key', t: 'Project:'}, {c: 'dots', t: ' ....................... '}, {c: 'value', t: 'Nineteen Dev'}],
  [{c: 'dots', t: '. '}, {c: 'key', t: 'IDE:'}, {c: 'dots', t: ' ........................... '}, {c: 'value', t: 'VS Code'}],
  [{c: 'dots', t: '.'}],
  [{c: 'dots', t: '. '}, {c: 'key', t: 'Languages.Programming:'}, {c: 'dots', t: ' ......... '}, {c: 'value', t: 'JavaScript, Node.js, SQL'}],
  [{c: 'dots', t: '. '}, {c: 'key', t: 'Languages.Computer:'}, {c: 'dots', t: ' ............ '}, {c: 'value', t: 'HTML, CSS, JSON, Markdown'}],
  [{c: 'dots', t: '. '}, {c: 'key', t: 'Languages.Real:'}, {c: 'dots', t: ' ................ '}, {c: 'value', t: 'Indonesian, English'}],
  [{c: 'dots', t: '.'}],
  [{c: 'dots', t: '. '}, {c: 'key', t: 'Quote:'}],
  [{c: 'value', t: '  Keep away from people who try to belittle your ambitions.'}],
  [{c: 'value', t: '  ~ Mark Twain'}],
  [{c: 'title', t: ''}],
  [{c: 'title', t: '- Contact --------------------------------------------'}],
  [{c: 'dots', t: '. '}, {c: 'key', t: 'Email:'}, {c: 'dots', t: ' ......................... '}, {c: 'value', t: 'brokariim@gmail.com'}],
  [{c: 'dots', t: '. '}, {c: 'key', t: 'GitHub:'}, {c: 'dots', t: ' ........................ '}, {c: 'value', t: '@krido19'}],
  [{c: 'dots', t: '. '}, {c: 'key', t: 'LinkedIn:'}, {c: 'dots', t: ' ...................... '}, {c: 'value', t: 'in/kridobahtiar'}],
  [{c: 'dots', t: '. '}, {c: 'key', t: 'Blog:'}, {c: 'dots', t: ' .......................... '}, {c: 'value', t: 'nineteen-dev.vercel.app/blog'}],
  [{c: 'title', t: ''}],
  [{c: 'title', t: '- GitHub Stats ---------------------------------------'}],
  [{c: 'dots', t: '. '}, {c: 'key', t: 'Repos:'}, {c: 'value', t: ' .... -- '}, {c: 'title', t: '| '}, {c: 'key', t: 'Stars:'}, {c: 'dots', t: ' ......................... '}, {c: 'value', t: '--'}],
  [{c: 'dots', t: '. '}, {c: 'key', t: 'Commits:'}, {c: 'value', t: ' ....................... ---- '}, {c: 'title', t: '| '}, {c: 'key', t: 'Followers:'}, {c: 'dots', t: ' ......... '}, {c: 'value', t: '--'}],
  [{c: 'dots', t: '. '}, {c: 'key', t: 'Languages:'}, {c: 'dots', t: ' ..................... '}, {c: 'value', t: 'JavaScript, HTML, CSS'}]
];

let textElements = lines.map((line, i) => {
  let y = 50 + (i * 20);
  let content = line.map(span => `<tspan class="${span.c}" xml:space="preserve">${span.t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</tspan>`).join('');
  return `  <text x="380" y="${y}">${content}</text>`;
}).join('\n');

const svg = `<svg width="950" height="550" viewBox="0 0 950 550" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    .title { font-family: 'Courier New', monospace; font-size: 15px; fill: #8b949e; }
    .key { font-family: 'Courier New', monospace; font-size: 15px; fill: #ff7b72; font-weight: bold; }
    .value { font-family: 'Courier New', monospace; font-size: 15px; fill: #c9d1d9; }
    .dots { font-family: 'Courier New', monospace; font-size: 15px; fill: #8b949e; }
    .bg { fill: #0d1117; stroke: #30363d; stroke-width: 1px; }
  </style>
  <rect width="948" height="548" x="1" y="1" rx="10" class="bg" />
  
  <image href="${imgSrc}" x="40" y="125" width="300" height="300" />
  
${textElements}
</svg>`;

fs.writeFileSync('profile.svg', svg);
console.log('Done!');
