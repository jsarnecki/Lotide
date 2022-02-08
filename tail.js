let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//TAIL
let tail = function(arr) {
  return arr.slice(1, arr.length);
};

let list = [1, 2, 3, 4, 5];
console.log(tail(list));
console.log(assertEqual(list.length, 5));

let arrResult = tail(list);
console.log(assertEqual(arrResult[0], 2));
console.log(assertEqual(arrResult[1], 3));