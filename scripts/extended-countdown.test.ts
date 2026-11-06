import { test, expect } from 'bun:test';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const html = readFileSync('sonolift-shopify-black-friday-estendida.html', 'utf8');
const start = html.indexOf("var end=Date.parse(");
const end = html.indexOf("var t=document.getElementById('rv-track')", start);
const code = html.slice(start, end);
function run(now: string) {
  const timer = { textContent: '' };
  const gifts = [{ hidden: false }, { hidden: false }];
  const clock = { parse: Date.parse, now: () => Date.parse(now) };
  const context = { Date: clock, document: { getElementById: () => timer, querySelectorAll: () => gifts, addEventListener: () => {} }, setInterval: () => {} };
  runInNewContext(code, context);
  return { timer, gifts, context, clock };
}
test('fixed deadline is December 1 at 23:59:59 Brasilia time', () => {
  expect(run('2026-12-01T23:59:58-03:00').timer.textContent).toBe('0 dias : 00h : 00m : 01s');
});
test('visitor time determines days, hours, minutes and seconds', () => {
  expect(run('2026-11-07T09:27:49-03:00').timer.textContent).toBe('24 dias : 14h : 32m : 10s');
});
test('refresh and a new visit do not restart the countdown', () => {
  const first = run('2026-11-30T23:59:59-03:00');
  const refresh = run('2026-12-01T00:00:00-03:00');
  expect(first.timer.textContent).toBe('1 dias : 00h : 00m : 00s');
  expect(refresh.timer.textContent).toBe('0 dias : 23h : 59m : 59s');
});
test('deadline ends the offer and hides the free chest blocks', () => {
  const state = run('2026-12-01T23:59:58-03:00');
  expect(state.gifts.every(g => !g.hidden)).toBe(true);
  state.clock.now = () => Date.parse('2026-12-01T23:59:59-03:00');
  runInNewContext('tick()', state.context);
  expect(state.timer.textContent).toBe('Oferta encerrada');
  expect(state.gifts.every(g => g.hidden)).toBe(true);
  expect(run('2026-12-02T12:00:00-03:00').timer.textContent).toBe('Oferta encerrada');
});