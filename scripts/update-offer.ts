import { readFileSync, writeFileSync } from 'node:fs';

// Preserve the submitted page verbatim except for the current offer values.
const input = process.argv[2];
if (!input) throw new Error('Provide the submitted HTML path');
const original = readFileSync(input, 'utf8');
const updated = original
  .replace(/R\$ 197(?:,00)?(?!\d)/g, 'R$ 239,00')
  .replaceAll('R$ 16,42', 'R$ 19,92')
  .replace('Compre o Kit Rosto e GANHE o Kit Colo 100% Gr&#225;tis', 'Leve o Kit Facial Completo + tratamento para o Colo de BRINDE')
  .replace('Receba o Sistema Facial SonoLift™ e ganhe proteção para o colo.', 'Leve o Kit Facial Completo SonoLift™ e receba o tratamento para o colo de brinde.')
  .replace('>Sistema Facial <span', '>Kit Facial Completo <span');

// Do not fabricate reference prices: the existing R$ 230 + R$ 167 total R$ 397.
// The supplied Shopify file already includes both tracking scripts.
if ([...updated].length > 50000) throw new Error('Custom Liquid character limit exceeded');
writeFileSync('sonolift-shopify-v62.html', updated);
// The preview already supplies these same tracking scripts through its root head.
writeFileSync('src/content/sonolift-atual.html', updated.split('\n').slice(3).join('\n'));
console.log(`Generated complete Shopify HTML: ${[...updated].length} characters`);