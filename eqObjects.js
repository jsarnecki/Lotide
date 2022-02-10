const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    //console.log(`🛑 False: ${arr1} !== ${arr2}`);
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
     // console.log(`🛑 False: ${arr1} !== ${arr2}`);
      return false;
    }
  }
  //console.log(`✅ Passed: ${arr1} === ${arr2}`);
  return true;
};

const eqObjects = function(obj1, obj2) {
  const keyArr = Object.keys(obj1);
  //Nest loop, keyArr on outside checking elm by elm looping thru obj2 keys
  for (let key1 of keyArr) {
    for (let key2 in obj2) {
      if (key1 === key2) {
        if (Array.isArray(obj2[key2])) {
          if (!eqArrays(obj1[key1], obj2[key2])) {
            //If the eqArr returns true, it will continue on the loop
            return false;
          }
        } else if (obj1[key2] !== obj2[key2]) {
            //console.log(`🛑 False: ${obj1[key1]} !== ${obj2[key2]}`);
            return false;
        }
      }
    }
  }
  console.log(`✅ Passed: ${obj1} === ${obj2}`);
  return true;
};

let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// //TEST CODE - COMPLEX

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log("cd/dc:", assertEqual(eqObjects(cd, dc), true)); // => true

const ab = {a: 5, b: [1, "fun", "4"], c: "string", d: [5, 4]};
const ba = {c: "string", b: [1, "fun", "4"], a: 5, d: [4, 5]};
console.log("ab/ba:", assertEqual(eqObjects(ab, ba), false)); //

const cd2 = { c: "1", d: ["2", 3, 4]};
console.log("cd/dc:", assertEqual(eqObjects(cd, cd2), false)); // => false


//TEST CODE - SIMPLE

// let abc = {a: 1, b: 2, c: "LHL"};
// let def = {b: 2, a: 1, c: "LHL"};
// let result1 = eqObjects(abc, def);
// console.log(assertEqual(result1, true)); //True

// let ghi = {a: 3, b: 4, c: "yo"};
// let jkl = {a: 4, b: 5, c: "yo"};

// let result2 = eqObjects(ghi, jkl);
// console.log(assertEqual(result2, false)); //False
