import { test, expect } from 'bun:test';
import { readFileSync } from 'node:fs';

const html = readFileSync('sonolift-shopify-black-friday-v2.html', 'utf8');

test('Shopify HTML stays within the 50,000 character limit', () => {
  expect(html.length).toBeLessThanOrEqual(50000);
});

test('return guarantee lasts exactly seven days', () => {
  const days = Number(html.match(/data-guarantee-days="(\d+)"/)?.[1]);
  expect(days).toBe(7);
});

test('the supplied 239 reais offer retains the five percent Pix discount', () => {
  const pix = Number(html.match(/class="price"><strong>R\$ ([\d,]+)/)?.[1].replace(',', '.'));
  const card = Number(html.match(/ou R\$ ([\d,]+)/)?.[1].replace(',', '.'));
  expect(card).toBe(239);
  expect(pix).toBe(227.05);
  expect(Math.round(card * 0.95 * 100) / 100).toBe(pix);
});