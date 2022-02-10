const assertObjectsEqual = function(actual, expected) {
  let inspect = require('util').inspect;
  const keyArr = Object.keys(actual);
  //Nest loop, keyArr on outside checking elm by elm looping thru expected keys
  for (let key1 of keyArr) {
    for (let key2 in expected) {
      if (key1 === key2) {
        if (Array.isArray(expected[key2])) {
          if (!eqArrays(actual[key1], expected[key2])) {
            //If the eqArr returns true, it will continue on the loop
            console.log(`🛑 Assertion Failed: ${inspect(actual[key1])} !== ${inspect(expected[key2])}`);
            return false;
          }
        } else if (actual[key2] !== expected[key2]) {
            console.log(`🛑 Assertion Failed: ${inspect(actual[key1])} !== ${inspect(expected[key2])}`);
            return false;
        }
      }
    }
  }
  console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  return true;
};

const eqArrays = function(arr1, arr2) {
  let inspect = require('util').inspect;
  if (arr1.length !== arr2.length) {
    console.log(`🛑 Assertion Failed: ${inspect(arr1)} !== ${inspect(arr2)}`);
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`🛑 Assertion Failed: ${inspect(arr1)} !== ${inspect(arr2)}`);
      return false;
    }
  }
  console.log(`✅ Assertion Passed: ${inspect(arr1)} === ${inspect(arr2)}`);
  return true;
};

//TEST CODE
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log("cd/dc:", assertObjectsEqual(cd, dc), true); // => true

const ab = {a: 5, b: [1, "fun", "4"], c: "string", d: [5, 4]};
const ba = {c: "string", b: [1, "fun", "4"], a: 5, d: [4, 5]};
console.log("ab/ba:", assertObjectsEqual(ab, ba), false); //

const cd2 = { c: "1", d: ["2", 3, 4]};
console.log("cd/dc:", assertObjectsEqual(cd, cd2), false); // => false
