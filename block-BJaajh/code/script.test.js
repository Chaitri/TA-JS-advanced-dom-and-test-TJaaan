const { checkFive, getWinner } = require('./script');

test('should return 4 is less than 5 , on input 4', () => {
  expect(checkFive(4)).toMatch('4 is less than 5.');
});

test('should return 6 is greater than 5 , on input 6', () => {
  expect(checkFive(6)).toMatch('6 is greater than 5.');
});

test('should return 5 is equal to 5 , on input 5', () => {
  expect(checkFive(5)).toMatch('5 is equal to 5.');
});

test('should not return 5 is equal to 5 , on input 4', () => {
  expect(checkFive(4)).not.toMatch('5 is equal to 5.');
});

test('should return 0 is less than 5 , on input 0', () => {
  expect(checkFive(0)).toMatch('0 is less than 5.');
});

test('Player1 should win on guess1=Rock and guess2=Scissors', () => {
  expect(getWinner('Rock', 'Scissors')).toMatch('Player 1 wins!');
});

test('Player1 should win on guess1=Rock and guess2=Scissors', () => {
  expect(getWinner('Rock', 'Paper')).toMatch('Player 2 wins!');
});

test('Player1 should win on guess1=Rock and guess2=Scissors', () => {
  expect(getWinner('Scissors', 'Scissors')).toMatch('TIE');
});

test('Player1 should win on guess1=Rock and guess2=Scissors', () => {
  expect(getWinner('Scissors', 'Mountain')).toMatch('Invalid Input');
});
test('Player1 should win on guess1=Rock and guess2=Scissors', () => {
  expect(getWinner('Beach', 'Mountain')).toMatch('Invalid Input');
});
