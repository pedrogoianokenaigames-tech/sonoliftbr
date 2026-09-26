import fs from 'fs';

// Builds the Shopify Custom Liquid block from the current landing page,
// injecting the Utmify + Meta pixels and trimming whitespace to stay < 50k chars.

const page = fs.readFileSync('src/content/sonolift-atual.html', 'utf-8');
const root = fs.readFileSync('src/routes/__root.tsx', 'utf-8');

const scripts = root.match(/children: `[^`]*`/g) ?? [];
const inline = scripts
  .map((s) => s.replace(/^children: `/, '').replace(/`$/, ''))
  .map((s) => `<script>${s}</script>`)
  .join('\n');

const noscript =
  '<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=976841758671110&ev=PageView&noscript=1"/></noscript>';

// Trim to stay under Shopify's 50k-char Custom Liquid limit:
// - drop JS/CSS comments and collapse whitespace
// - shorter asset host (published domain)
// - drop video poster/preload/controlslist attrs (autoplay fills in)
const ASSET_HOST = 'https://project--8e2875b6-88f6-4189-acb8-98d3a3a05914.lovable.app/__l5e/assets-v1/';
const SHORT_HOST = 'https://sonoliftbr.lovable.app/__l5e/assets-v1/';
const trimmed = page
  .replace(/^\s*\/\/.*$/gm, '')
  .replace(/\/\*[^*]*\*\//g, '')
  .replace(/\n\s*/g, '\n')
  .replace(/\n{2,}/g, "\n")
  .replace(/<!--[\s\S]*?-->/g, '')
  .replace(/>\s+</g, "><")
  .replace(/\s{2,}/g, " ")
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
  .replace(/ >/g, '>')
  .replace('<link rel="preconnect" href="https://fonts.googleapis.com">', '')
  .replace(' crossorigin>', '>');

const out = inline + '\n' + noscript + '\n' + trimmed;
fs.writeFileSync('sonolift-shopify-v55.html', out);
console.log('sonolift-shopify-v55.html', out.length, 'chars');
