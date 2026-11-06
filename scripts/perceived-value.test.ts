import { test, expect } from 'bun:test';
import { readFileSync } from 'node:fs';

const html = readFileSync('sonolift-shopify-black-friday-v3.html', 'utf8');

test('card offer remains 239 reais with twelve installments of 19.92', () => {
  const offers = [...html.matchAll(/ou R\$ ([\d,]+) em (\d+)x de R\$ ([\d,]+)/g)];
  expect(offers).toHaveLength(3);
  for (const offer of offers) {
    expect(offer.slice(1)).toEqual(['239,00', '12', '19,92']);
  }
});

test('Pix offer remains 227.05 reais', () => {
  const prices = [...html.matchAll(/<strong>R\$ ([\d,]+) no Pix<\/strong>/g)];
  expect(prices.map(price => price[1])).toEqual(['227,05', '227,05', '227,05']);
});

test('return window remains seven days', () => {
  expect(Number(html.match(/data-guarantee-days="(\d+)"/)?.[1])).toBe(7);
});

test('Shopify fragment stays within 50000 characters', () => {
  expect(html.length).toBeLessThanOrEqual(50000);
});