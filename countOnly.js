const countOnly = function(allItems, itemsToCount) {
  const result = {};
  //Loop thru itemsToCount, checking allItems to see if they match
  for (let key in itemsToCount) {
    for (let item of allItems) {
      if (key === item && itemsToCount[key] === true) {
        //checks if result has the key yet or not
        result.hasOwnProperty(item) ? result[item]++ : result[item] = 1;
      }
    }
  }
  return result;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Tim",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

//Random obj to test with
// const obj = {
//   "Fang": true,
//   "Kavith": true,
//   "Jason": true,
//   "Salima": false,
//   "Joe": true,
//   "Agouhanna": false,
//   "Tim": true
// };

let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(
  assertEqual(result1["Jason"], 1),
  assertEqual(result1["Karima"], undefined),
  assertEqual(result1["Fang"], 2),
  assertEqual(result1["Agouhanna"], undefined)
);