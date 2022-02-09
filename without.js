const without = function(sourceArr, removeItemsArray) {
  let result = sourceArr.slice();
  //creates copy of sourceArr
  for (let i = 0; i < removeItemsArray.length; i++) {
    //Outer loop checks each removeItemArr one by one
    for (let j = 0; j < result.length; j++) {
      if (removeItemsArray[i] === result[j]) {
        result.splice(j, 1);
      }
    }
  }
  return result;
};


//TESTS
const assertArraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(`🛑Failed: ${arr1} !== ${arr2}\n(Not same length)`);
    process.exit();
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`🛑Failed: ${arr1} !== ${arr2}\n(Elements at index ${i} don't match)`);
      process.exit();
    }
  }
  console.log(`✅Passed: ${arr1} === ${arr2}`);
  process.exit();
};

const test = [4, 6, 13, 78, "hey", "lighthouse", 100]; 
console.log(without(test, ["lighthouse", 6, 78, 3, 7, "hi"])); //=> [4, 13, "hey", 100]
// Make sure the original array was not altered by the without function
assertArraysEqual(test, [4, 6, 13, 78, "hey", "lighthouse", 100]);

assertArraysEqual(without(test), [4, 13, "hey", 100]);

without(["1", "2", "3"], [1, 2, "3"]);// => ["1", "2"]
without([1, 2, 3], [1]); // => [2, 3]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); 
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);