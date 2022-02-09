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

console.log(assertArraysEqual([2, NaN, 5, "ok"], [2, NaN, 5, "mmkay"]));

console.log(assertArraysEqual([1, 2, 4, 5], [1, 2, 4, 5]));

console.log(assertArraysEqual([1, 2, 4, 5], [1, 2, 5]));
