function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

function isPalindrome(value) {
  let reversed = value.split('').reverse().join('');
  return reversed === value;
}

function getCircumfrence(radius) {
  return `The circumference is ${2 * 3.14 * radius}`;
}

function getArea(radius) {
  return `The area is ${3.14 * radius * radius}`;
}

module.exports = {
  getFullName,
  isPalindrome,
  getCircumfrence,
  getArea,
};
