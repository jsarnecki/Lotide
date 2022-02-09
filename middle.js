const middle = function(arr) {
  if (arr.length < 3) {
    return [];
  }
  let result = [];
  if (arr.length % 2 === 0) {
    //Even length, so will return 2 elms
    let mid = arr.length / 2;
    result.push(arr[mid - 1], arr[mid]);
    /*arr[mid - 1] is first as length/2 doesn't
      account for 0-indexed */
  } else if (arr.length % 2 === 1) {
    //Odd length, so - 1 to make even, then divide
    let mid = (arr.length - 1) / 2;
    result.push(arr[mid]);
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

console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));
console.log(assertArraysEqual(middle([1]), []));
console.log(assertArraysEqual(middle([1, 2]), []));
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));