const assertEqual = require('../assertEqual');
const tail = require('../tail');

let list = [1, 2, 3, 4, 5];

console.log(assertEqual(list.length, 5));

let arrResult = tail(list);
console.log(assertEqual(arrResult[0], 2)); //Pass
console.log(assertEqual(arrResult[1], 3)); //Pass

console.log(assertEqual(arrResult[1], 2)); //Fail