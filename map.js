const map = (arr, callBack) => {
  let result = [];

  for (let item of arr) {
    result.push(callBack(item));
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

const mapped = (elm) => {
  return elm[3];
};

const thingsIEnjoy = ["food", "laughing", "beer", "travels", "languages", "yoga"];
const colors = ["blue", "pink", "grey", "green", "orange"];
const asianCountries = ["China", "Japan", "Kazakhstan", "Korea", "Mongolia"];


console.log(assertArraysEqual(map(thingsIEnjoy, mapped), ["d", "g", "r", "v", "g", "a"]));
console.log(assertArraysEqual(map(colors, mapped), ["e", "k", "y", "e", "n"]));
console.log(assertArraysEqual(map(asianCountries, mapped), ["n", "a", "a", "e", "g"]));
