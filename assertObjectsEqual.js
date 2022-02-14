
const assertObjectsEqual = function(actual, expected) {
  let inspect = require("util").inspect;
  //Var Pass/Fail messages
  const pass = `✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  const fail = `🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  //Quick check keyArrObj2, not same length, false
  let objOneKeys = Object.keys(actual);
  let objTwoKeys = Object.keys(expected);
  if (objOneKeys.length !== objTwoKeys.length) {
    //console.log("Here 1");
    console.log(fail);
    return false;
  }
  //compare one obj keys from arr, to the other obj key for..in
  for (let key of objOneKeys) {
    if (Array.isArray(expected[key])) {
      if (!eqArrays(expected[key], actual[key])) {
        console.log(fail);
        return false;
      } else if (actual[key] !== expected[key]) {
        console.log(fail);
        return false;
      }
    }
  }
  console.log(pass);
  return true;
};


const eqArrays = function(arr1, arr2) {
  //let inspect = require('util').inspect;
  if (arr1.length !== arr2.length) {
    //console.log(`🛑 Assertion Failed: ${inspect(arr1)} !== ${inspect(arr2)}`);
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      //console.log(`🛑 Assertion Failed: ${inspect(arr1)} !== ${inspect(arr2)}`);
      return false;
    }
  }
  //console.log(`✅ Assertion Passed: ${inspect(arr1)} === ${inspect(arr2)}`);
  return true;
};

//TEST CODE
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };


console.log("1", assertObjectsEqual(cd, dc), true); // => true

const ab = {a: 5, b: [1, "fun", "4"], c: "string", d: [5, 4]};
const ba = {c: "string", b: [1, "fun", "4"], a: 5, d: [4, 5]};

console.log("2", assertObjectsEqual(ab, ba), false);// => false

const cd2 = { c: "1", d: ["2", 3, 4]};

console.log("3", assertObjectsEqual(cd, cd2), false);// => false

