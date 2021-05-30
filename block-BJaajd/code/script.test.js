const { removeFromArray, map, reduce } = require('./script');

test('function should remove value 3 from array [1,2,3]', () => {
  expect(removeFromArray([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
});

test('function should remove value 1 from array [1] and return empty array', () => {
  expect(removeFromArray([1], 1)).toEqual([]);
});

test('function should remove value 3 from array [1,2,3]', () => {
  expect(removeFromArray([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
});

test('function should map double values of array', () => {
  expect(map([1, 2, 3, 4], (num) => num * 2)).toEqual([2, 4, 6, 8]);
});

test('function should not map the same array back', () => {
  expect(map([1, 2, 3, 4], (num) => num * 2)).not.toEqual([1, 2, 3, 4]);
});

test('function should map empty array back', () => {
  expect(map([], (num) => num * 2)).toEqual([]);
});

test('function should reduce array to a single sum of array', () => {
  expect(reduce([1, 2, 3], (acc, cv) => (acc += cv), 0)).toBe(6);
});

test('function should not return same array', () => {
  expect(reduce([1, 2, 3], (acc, cv) => (acc += cv), 0)).not.toEqual([1, 2, 3]);
});

test('function should reduce array to single string', () => {
  expect(
    reduce(['hello', 'world'], (acc, cv) => (acc += ' ' + cv), '')
  ).not.toEqual([1, 2, 3]);
});
