const fs = require('fs');
const DOMAIN = 'https://sonoliftbr.lovable.app';
const content = fs.readFileSync('scripts/generate-shopify-v42.ts', 'utf8');
const startMatch = content.match(/const finalHtml = `/);
const start = startMatch.index + startMatch[0].length;
const end = content.lastIndexOf('`;');
const template = content.substring(start, end);
const result = template.replace(/\${DOMAIN}/g, DOMAIN);
console.log(result);
