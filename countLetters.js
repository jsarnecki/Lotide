const countLetters = function(str) {
  let letterArr = str.split("");
  let result = {};
  for (let letter of letterArr) {
    if (result.hasOwnProperty(letter)) {
      result[letter]++;
    } else if (letter !== " ") {
      result[letter] = 1;
    }
  }
  return result;
};

//Only has condition against not counting spaces
//Will count numbers and punctuation

let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let result1 = countLetters("so how do you do");
let result2 = countLetters("oh goodness so many stormy days in yvr");

console.log(
  "Result1:",
  assertEqual(result1["o"], 5),
  assertEqual(result1["d"], 2)
);

console.log(
  "Result2:",
  assertEqual(result2["o"], 5),
  assertEqual(result2["d"], 2),
  assertEqual(result2["y"], 4),
  assertEqual(result2["s"], 5)
);