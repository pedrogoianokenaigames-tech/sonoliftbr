import { test, expect } from 'bun:test';
import { readFileSync } from 'node:fs';

test('complete Shopify export fits the 50,000-character Custom Liquid limit', () => {
  const html = readFileSync('sonolift-shopify-avaliacoes-v2.html', 'utf8');
  expect(html.length).toBeLessThanOrEqual(50000);
});