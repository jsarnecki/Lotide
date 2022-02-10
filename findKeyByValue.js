const findKeyByValue = function(obj, value) {
  let keyArr = Object.keys(obj);
  for (let key of keyArr) {
    if (obj[key] === value) {
      return key;
    }
  }
  return undefined;
};

let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  kdrama: "Squid Game",
  horror: "Haunting of Hill House",
  psychological: "Yellow Jackets"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Squid Game"), "kdrama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Yellow Jackets"), "psychological");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Office"), undefined);