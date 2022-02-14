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

module.exports =  assertArraysEqual;