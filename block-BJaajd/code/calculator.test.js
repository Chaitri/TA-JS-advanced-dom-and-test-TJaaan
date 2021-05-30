const calculator = require('./calculator');

test('1 + 2 = 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('10 - 2 = 8', () => {
  expect(calculator.subtract(10, 2)).toBe(8);
});

test('1 + 2 = 3', () => {
  expect(calculator.sum(1, 2)).toBe(3);
});

test('3 * 4 = 12', () => {
  expect(calculator.multiply(3, 4)).toBe(12);
});

test('2 ** 3 = 8', () => {
  expect(calculator.power(2, 3)).toBe(8);
});

test('5! = 120', () => {
  expect(calculator.factorial(5)).toBe(120);
});
