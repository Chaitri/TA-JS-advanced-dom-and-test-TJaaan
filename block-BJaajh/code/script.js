function checkFive(num) {
  let result = '';
  if (num < 5) {
    result = num + ' is less than 5.';
  } else if (num === 5) {
    result = num + ' is equal to 5.';
  } else {
    result = num + ' is greater than 5.';
  }

  return result;
}

function getWinner(guess1, guess2) {
  let valsObj = {
    Rock: ['Scissors'],
    Paper: ['Rock'],
    Scissors: ['Paper'],
  };

  if (
    Object.keys(valsObj).includes(guess1) &&
    Object.keys(valsObj).includes(guess2)
  ) {
    if (guess1 === guess2) {
      return `TIE`;
    } else if (valsObj[guess1].includes(guess2)) {
      return `Player 1 wins!`;
    } else {
      return `Player 2 wins!`;
    }
  } else {
    return `Invalid Input`;
  }
}

module.exports = {
  checkFive,
  getWinner,
};
