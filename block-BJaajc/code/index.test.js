const {
  getFullName,
  isPalindrome,
  getCircumfrence,
  getArea,
} = require('./index');

test('Full name of "John" and "Smith" is "John Smith"', () => {
  expect(getFullName('John', 'Smith')).toBe('John Smith');
});

test('Full name of "John" and "Smith Harris" is "John Smith Harris"', () => {
  expect(getFullName('John', 'Smith Harris')).toBe('John Smith Harris');
});

test('Full name of "John" and "Smith" is not "John Smith Harris"', () => {
  expect(getFullName('John', 'Smith')).not.toBe('John Smith Harris');
});

test('radar should be a palindrome', () => {
  expect(isPalindrome('radar')).toBeTruthy();
});

test('world should not be a palindrome', () => {
  expect(isPalindrome('world')).not.toBeTruthy();
});

test('Circumference of circle with radius 30 should be 188.4', () => {
  expect(getCircumfrence(30)).toMatch('The circumference is 188.4');
});

test('Circumference of circle with radius 30 should be 188.4', () => {
  expect(getCircumfrence(30)).not.toMatch('The circumference is 190');
});

test('Area of circle with radius 30 should be 2826', () => {
  expect(getArea(30)).toMatch('The area is 2826');
});

test('Area of circle with radius 30 should be 2826', () => {
  expect(getArea(30)).not.toMatch('The area is 2829');
});
