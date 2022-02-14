const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

console.log("module:", module);

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); 
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); 
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([null, true, false, "", "143"], [null, true, false, "", "143"]), true);
assertEqual(eqArrays([true, false, "", "143"], [null, false, true, "", "143"]), false);