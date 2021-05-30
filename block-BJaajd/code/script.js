function removeFromArray(arr, val) {
  let index = arr.indexOf(val);
  arr.splice(index, 1);
  return arr;
}

function map(items, callback) {
  const final = [];
  for (let index = 0; index < items.length; index++) {
    final.push(callback(items[index]));
  }
  return final;
}

function reduce(items, reducer, inititalValue = items[0]) {
  let acc = inititalValue;
  for (let index = 0; index < items.length; index++) {
    acc = reducer(acc, items[index], index, items);
  }
  return acc;
}

module.exports = {
  removeFromArray,
  map,
  reduce,
};
