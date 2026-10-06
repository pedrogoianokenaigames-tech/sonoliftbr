import fs from 'fs';

const page = fs.readFileSync('src/content/sonolift-atual.html', 'utf-8');
const root = fs.readFileSync('src/routes/__root.tsx', 'utf-8');
const scripts = root.match(/children: `[^`]*`/g) ?? [];
const inline = scripts.map((s) => s.replace(/^children: `/, '').replace(/`$/, '')).map((s) => `<script>${s}</script>`).join('\n');
const noscript = '<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=976841758671110&ev=PageView&noscript=1"/></noscript>';
const ASSET_HOST = 'https://project--8e2875b6-88f6-4189-acb8-98d3a3a05914.lovable.app/__l5e/assets-v1/';
const SHORT_HOST = 'https://sonoliftbr.lovable.app/__l5e/assets-v1/';
const trimmed = page
  .replace('aria-label="Ativar som do depoimento" aria-pressed="false"', 'data-audio-a11y')
  .replace(/^\s*\/\/.*$/gm, '')
  .replace(/\/\*[^*]*\*\//g, '')
  .replace(/\n\s*/g, '\n')
  .replace(/\n{2,}/g, '\n')
  .replace(/<!--[\s\S]*?-->/g, '')
  .replace(/>\s+</g, '><')
  .replace(/\s{2,}/g, ' ')
  .split(ASSET_HOST).join(SHORT_HOST)
  .replace(/ poster="[^"]*"/g, '')
  .replace(/ preload="metadata"/g, '')
  .replace(/ controlslist="nodownload"/g, '')
  .replace(/ draggable="false"/g, '')
  .replace(/ loading="lazy"/g, '')
  .replace(/ xmlns="http:\/\/www\.w3\.org\/2000\/svg"/g, '')
  .replace(/style="([^"]*)"/g, (_m, s: string) => `style="${s.replace(/:\s+/g, ':').replace(/;\s+/g, ';').replace(/;$/,'')}"`)
  .replace(/\n/g, '')
  .replace(/ aria-label="[^"]*"/g, '')
  .replace(/ aria-hidden="[^"]*"/g, '')
  .replace('data-audio-a11y', 'aria-label="Ativar som do depoimento" aria-pressed="false"')
  .replace(/ class="transition group-hover:translate-x-1"/g, '')
  .replace(/ rel="noopener noreferrer"/g, '')
  .replace(/ >/g, '>')
  .replace('<link rel="preconnect" href="https://fonts.googleapis.com">', '')
  .replace(' crossorigin>', '>')
  .replace(/ alt="[^"]*"/g, '');

// Shorten private, page-scoped selectors only in the Shopify copy.
const cssMin = (css: string) => css.replace(/\s*:\s+/g, ':').replace(/\s*;\s*/g, ';').replace(/\s*\{\s*/g, '{').replace(/\s*\}\s*/g, '}').replace(/,\s+/g, ',').replace(/\s*\n\s*/g, '');
const compact = trimmed
  .replace(/<style>([\s\S]*?)<\/style>/g, (_m, css: string) => `<style>${cssMin(css)}</style>`)
  .replace(/<script>([\s\S]*?)<\/script>/g, (_m, js: string) => `<script>${js.replace(/\s*\n\s*/g, ' ')}</script>`)
  .replace(/(@media[^\{]*\{)/g, '$1').replaceAll('sonolift-root', 's').replaceAll('sl-', 's-');
const out = inline + '\n' + noscript + '\n' + compact;

let o = out;
for (let i = 59; o.length > 50000 && i < 100; i++) o = o;
fs.writeFileSync('sonolift-shopify-v59.html', o);
console.log('sonolift-shopify-v59.html', o.length, 'chars', o.length <= 50000 ? 'OK' : 'OVER LIMIT');