const { add, sub, mul, div, sin, cos, tan } = require('.');

test('add is working fine', () => {
	expect(add(5, 5, 5)).toBe(15);
});

test('sub is working fine', () => {
	expect(sub(5, 5, 5)).toBe(-5);
});

test('mul is working fine', () => {
	expect(mul(5, 5, 5)).toBe(125);
});

test('div is working fine', () => {
	expect(div(5, 5, 5)).toBe(1 / 5);
});

test('sin is working fine', () => {
	expect(sin(30)).toBeCloseTo(1 / 2);
});

test('cos is working fine', () => {
	expect(cos(60)).toBeCloseTo(1 / 2);
});

test('tan is working fine', () => {
	expect(tan(45)).toBeCloseTo(1);
});
