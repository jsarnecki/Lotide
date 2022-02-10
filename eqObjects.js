// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObject = function(obj1, obj2) {
  //Create keyArr
  const keyArr = Object.keys(obj1);
  //Loop thru keyArr, returning false if a key doesn't exist in other obj
  for (let elm of keyArr) {
    for (let key in obj2) {
      if (elm === key) {
        if (obj1[key] !== obj2[key]) {
          //If true, check further, compare the values of both those objs, false if no
          console.log(`🛑 False: ${obj1[elm]} !== ${obj2[key]}`);
          return false;
        }
      }
    }
  }
  console.log(`✅ Passed: ${obj1} === ${obj2}`);
  return true;
  //if loop is successful, return true
};

let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


//TEST CODE - SIMPLE
let abc = {a: 1, b: 2, c: "LHL"};
let def = {b: 2, a: 1, c: "LHL"};
let result1 = eqObject(abc, def);
console.log(assertEqual(result1, true)); //True

let ghi = {a: 3, b: 4, c: "yo"};
let jkl = {a: 4, b: 5, c: "yo"};

let result2 = eqObject(ghi, jkl);
console.log(assertEqual(result2, false)); //False

//TEST CODE - COMPLEX

