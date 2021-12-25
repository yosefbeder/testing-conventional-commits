const add = (...ns) => ns.reduce((acc, n) => acc + n, 0);

const sub = (...ns) =>
	ns.reduce((acc, n, i) => (i === 0 ? acc : acc - n), ns[0]);

const mul = (...ns) =>
	ns.reduce((acc, n, i) => (i === 0 ? acc : acc * n), ns[0]);

const div = (...ns) =>
	ns.reduce((acc, n, i) => (i === 0 ? acc : acc / n), ns[0]);

const toRadian = deg => deg * (Math.PI / 180);

const sin = deg => Math.sin(toRadian(deg));

const cos = deg => Math.cos(toRadian(deg));

const tan = deg => Math.tan(toRadian(deg));

module.exports = { sub, add, mul, div, sin, cos, tan };
