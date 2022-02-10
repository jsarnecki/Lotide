const letterPositions = function(str) {
  const result = {};

  return result;
};

let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let test = "hello";
let testObj = {
  h: [0],
  e: [1],
  l: [2, 3],
  o: [4]
};

console.log(assertEqual(Number(testObj["e"]), Number(test.indexOf("e"))));
