function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function power(a, b) {
  return a ** b;
}

function factorial(a) {
  if (a === 0 || a === 1) return 1;
  for (var i = a - 1; i >= 1; i--) {
    a = a * i;
  }
  return a;
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
