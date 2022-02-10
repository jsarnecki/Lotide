// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObject = function(obj1, obj2) {
  //
}

let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


let abc = {a: 1, b: 2};
let def = {b: 2, a: 1};

console.log(eqObject(abc, def)) //True

let ghi = {a: 3, b: 4};
let jkl = {a: 4, b: 5};

console.log(eqObject(ghi, jkl)); //False