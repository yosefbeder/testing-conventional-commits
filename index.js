const add = (...ns) => ns.reduce((acc, n) => acc + n, 0);

const sub = (...ns) => ns.reduce((acc, n) => acc - n, 0);

const mul = (...ns) => ns.reduce((acc, n) => acc * n, 0);

const div = (...ns) => ns.reduce((acc, n) => acc / n, 0);

module.exports = { sub, add, mul, div };
