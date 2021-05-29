const moment = require('moment');
const lodash = require('lodash');

// Print Date or Time in the following format:

// - `February 12th 2021, 12:54:12 pm`
// - `Friday`
// - `Feb 12th 21`

const date = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(date);
console.log(moment().format('dddd'));
console.log(moment().format("MMM Do YY"));

// Check if the following date is valid or not:

// - `2020-01-01`
// - `2020-14-01`

let m = moment("2020-01-01");
console.log(m.isValid()); 
m = moment("2020-14-01");
console.log(m.isValid());

// Manipulating Dates

// - adds 7 days to current date
// - adds 7 months to current date
// - adds 7 years to current date

console.log(moment().add(7, 'days').format("MMM Do YY"));
console.log(moment().add(7, 'months').format("MMM Do YY"));
console.log(moment().add(7, 'years').format("MMM Do YY"));

// - subtracts 7 days to current date
// - subtracts 7 months to current date
// - subtracts 7 years to current date

console.log(moment().subtract(7, 'days').format("MMM Do YY"));
console.log(moment().subtract(7, 'months').format("MMM Do YY"));
console.log(moment().subtract(7, 'years').format("MMM Do YY"));

// Difference

let date1 = moment("2014-11-11");
let date2 = moment("2015-09-11");

console.log(date1.diff(date2, 'days'));

date1 = moment("2014-11-27");
date2 = moment("2015-09-16");

console.log(date1.diff(date2, 'days'));

// Query

console.log(moment('2020-01-01').isAfter('2018-01-01'));
console.log(moment('2010-01-01').isAfter('2018-01-01'));

console.log('2019 is a leap year:', moment([2019]).isLeapYear());
console.log('2020 is a leap year:', moment([2020]).isLeapYear());

// Lodash

let arr = [4, 45, 2, 23, 5];
console.log(lodash.chunk(arr, 3));
console.log(lodash.indexOf(arr, 23));
console.log(lodash.union(arr, [45, 2, 89]));
console.log(lodash.intersection(arr, [45, 2, 89]));
console.log(lodash.intersection([2, 4, 2, 23, 7, 7, 1]));

console.log(lodash.countBy([6.1, 4.2, 6.3], Math.floor));
console.log(lodash.includes([23, 45, 56], 45));
console.log(lodash.shuffle([1, 2, 3, 4]));
console.log(lodash.orderBy([23, 45, 56]));
console.log(lodash.size([23, 45, 56]));