const takeUntil = (arr, callBack) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callBack(arr[i])) {
      break;
    }
    //If it continues to not be true, push into result
    result.push(arr[i]);
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

const array = [1, 4, 5, 7, 9, -2, -5, 6];
const array2 = ["This", "is", "a", "friend"];
const array3 = [1, 2, 3, 4, 5];

const test1 = takeUntil(array2, x => x === "a");
const test2 = takeUntil(array, x => x < 0);
const test3 = takeUntil(array3, x => x * 2 === 8);

console.log(assertArraysEqual(test1, [ 'This', 'is' ]));
console.log(assertArraysEqual(test2, [ 1, 4, 5, 7, 9 ]));
console.log(assertArraysEqual(test3, [1, 2, 3]));
