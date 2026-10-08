import { execSync } from 'child_process';
import fs from 'fs';

const pages = [
  ['rocket', 'https://dhumketux.com/rocket/'],
  ['p-bayanno', 'https://dhumketux.com/bayanno-2/'],
  ['p-ekushey', 'https://dhumketux.com/ekushey-m/'],
  ['p-bidrohi', 'https://dhumketux.com/bidrohi-space-rocket/'],
  ['p-nazrul', 'https://dhumketux.com/nazrul-01-sslv/'],
  ['p-space-billboard', 'https://dhumketux.com/space-billboard/'],
  ['p-reusable', 'https://dhumketux.com/reusable-rocket-2/'],
  ['satellite', 'https://dhumketux.com/satellite/'],
  ['p-cansat', 'https://dhumketux.com/cansat/'],
  ['p-cubesat', 'https://dhumketux.com/cube-satellite/'],
  ['p-microsat', 'https://dhumketux.com/micro-satellite/'],
  ['p-weather-balloon', 'https://dhumketux.com/weather-balloon/'],
  ['p-sub-systems', 'https://dhumketux.com/sub-systems/'],
  ['p-thrusters', 'https://dhumketux.com/thrusters/'],
  ['p-test-launch', 'https://dhumketux.com/test-launch-putimach-01/'],
  ['drone', 'https://dhumketux.com/drone/'],
  ['p-skyblade-xero', 'https://dhumketux.com/skyblade-xero-prototype/'],
  ['p-skyblade-x4', 'https://dhumketux.com/skyblade-x4-vtol-drone/'],
  ['p-cargo-airship', 'https://dhumketux.com/cargo-airship/'],
  ['p-ultralight', 'https://dhumketux.com/ultralight-aircraft/'],
  ['p-helicopter', 'https://dhumketux.com/helicopter/'],
  ['news', 'https://dhumketux.com/news/'],
  ['contact', 'https://dhumketux.com/contact/'],
  ['investments', 'https://dhumketux.com/investments/'],
  ['our-policy', 'https://dhumketux.com/our-policy/'],
  ['social-responsibilities', 'https://dhumketux.com/social-responsibilities/'],
  ['donate-us', 'https://dhumketux.com/donate-us/'],
  ['ms-putimach-launch', 'https://dhumketux.com/first-rocket-putimach-01-launch-in-bangladesh/'],
  ['book-a-launch', 'https://dhumketux.com/book-a-launch/'],
  ['virtual-lab', 'https://dhumketux.com/student-virtual-lab/'],
  ['internship', 'https://dhumketux.com/dhumketux-internship-program/'],
  ['student-rocket', 'https://dhumketux.com/student-rocket-program/'],
  ['student-satellite', 'https://dhumketux.com/student-satellite-program/'],
];

for (const [name, url] of pages) {
  if (fs.existsSync(`${name}.txt`) && fs.statSync(`${name}.txt`).size > 5000) { console.log(`skip ${name}`); continue; }
  try {
    execSync(`z-ai function -n page_reader -a '{"url": "${url}"}' -o "${name}.json"`, { stdio: 'pipe', timeout: 60000 });
    const d = JSON.parse(fs.readFileSync(`${name}.json`, 'utf8'));
    const html = d.data?.html || d.html || '';
    const text = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
      .replace(/<br\s*\/?>/gi, '\n').replace(/<\/(p|div|li|h[1-6]|tr)>/gi, '\n')
      .replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#8217;/g, "'")
      .replace(/[ \t]+/g, ' ').replace(/\n\s*\n+/g, '\n').trim();
    fs.writeFileSync(`${name}.txt`, `URL: ${url}\n` + text);
    console.log(`${name}: ${text.length} chars ${text.includes('Page not found') ? '[404]' : ''}`);
  } catch (e) { console.log(`${name}: FAILED ${e.message.slice(0, 80)}`); }
}
