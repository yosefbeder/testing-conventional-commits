const { add, sub, mul, div } = require('.');

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
