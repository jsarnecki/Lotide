const letterPositions = function(str) {
  const result = {};
  const arrStr = str.split("");
  for (let letter of arrStr) {
    if (result.hasOwnProperty(letter)) {
      let prevIndex = result[letter][result[letter].length - 1] + 1;
      //prevIndex = the last index in this letter's array + 1
      result[letter].push(arrStr.indexOf(letter, prevIndex));
    } else if (letter !== " ") {
      result[letter] = [];
      result[letter].push(arrStr.indexOf(letter));
    }
  }
  return result;
};


const assertArraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(`🛑Failed: ${arr1} !== ${arr2}\n(Not same length)`);
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`🛑Failed: ${arr1} !== ${arr2}\n(Elements at index ${i} don't match)`);
      return false;
    }
  }
  console.log(`✅Passed: ${arr1} === ${arr2}`);
  return true;
};


//TEST CODE
let result2 = letterPositions("this is an excellent test sentence");
console.log(assertArraysEqual(result2["t"], [0, 19, 21, 24, 29]));
console.log(assertArraysEqual(result2["s"], [3, 6, 23, 26]));
console.log(assertArraysEqual(result2["e"], [11, 14, 17, 22, 27, 30, 33]));

let result1 = letterPositions("helollelllelloo");
console.log(assertArraysEqual(result1["l"], [2, 4, 5, 7, 8, 9, 11, 12]));
