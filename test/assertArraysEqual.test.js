const assertArraysEqual = require('../assertArraysEqual');

console.log(assertArraysEqual([2, NaN, 5, "ok"], [2, NaN, 5, "mmkay"]));
console.log(assertArraysEqual([1, 2, 4, 5], [1, 2, 4, 5]));
console.log(assertArraysEqual([1, 2, 4, 5], [1, 2, 5]));