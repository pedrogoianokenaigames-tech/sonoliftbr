import fs from 'fs';

// Builds the Shopify Custom Liquid block from the live preview HTML,
// injecting the Utmify + Meta pixels and trimming whitespace to stay < 50k chars.

const page = fs.readFileSync('src/content/sonolift-v19.html', 'utf-8');
const root = fs.readFileSync('src/routes/__root.tsx', 'utf-8');

const scripts = root.match(/children: `[^`]*`/g) ?? [];
const inline = scripts
  .map((s) => s.replace(/^children: `/, '').replace(/`$/, ''))
  .map((s) => `<script>${s}</script>`)
  .join('\n');

const noscript =
  '<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=976841758671110&ev=PageView&noscript=1"/></noscript>';

// Trim: drop JS/CSS line comments and collapse newlines/indentation.
const trimmed = page
  .replace(/^\s*\/\/.*$/gm, '')
  .replace(/\/\*[^*]*\*\//g, '')
  .replace(/\n\s*/g, '\n')
  .replace(/\n{2,}/g, '\n');

const out = inline + '\n' + noscript + '\n' + trimmed;
fs.writeFileSync('sonolift-shopify-v54.html', out);
console.log('sonolift-shopify-v54.html', out.length, 'chars');
