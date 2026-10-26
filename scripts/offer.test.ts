import { test, expect } from 'bun:test';
import { readFileSync } from 'node:fs';

const html = readFileSync('sonolift-shopify-v62.html', 'utf8');
const preview = readFileSync('src/content/sonolift-atual.html', 'utf8');

test('all three selling prices are R$ 239,00', () => {
  expect(html.match(/R\$ 239,00/g)).toHaveLength(3);
  expect(/R\$ 197(?:,00)?/.test(html)).toBe(false);
  expect(preview.match(/R\$ 239,00/g)).toHaveLength(3);
});

test('installments follow the new price rounded to cents', () => {
  expect(Math.round(23900 / 12)).toBe(1992);
  expect(html.match(/R\$ 19,92/g)).toHaveLength(3);
  expect(html.includes('R$ 16,42')).toBe(false);
});

test('reference total remains the sum of existing individual values', () => {
  const individual = [...html.matchAll(/Valor individual:[\s\S]*?R\$ (\d+)/g)].map(m => Number(m[1]));
  const total = html.match(/Valor total:[\s\S]*?R\$ (\d+)/);
  expect(individual).toEqual([230, 167]);
  expect(Number(total?.[1])).toBe(individual.reduce((sum, value) => sum + value, 0));
});