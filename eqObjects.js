// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObject = function(obj1, obj2) {
  //Create keyArr

  //Loop thru keyArr, returning false if a key doesn't exist in other obj

  //If true, check further, compare the values of both those objs, false if no

  //if loop is successful, return true
}

let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


//TEST CODE - SIMPLE
let abc = {a: 1, b: 2};
let def = {b: 2, a: 1};

console.log(eqObject(abc, def)) //True

let ghi = {a: 3, b: 4};
let jkl = {a: 4, b: 5};

console.log(eqObject(ghi, jkl)); //False

//TEST CODE - COMPLEX