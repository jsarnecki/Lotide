const findKey = (obj, callBack) => {
  for (const key in obj) {
    if (callBack(obj[key])) {
      return key;
    }
  }
};
/*The callback func will return the first key
  for which the callback returns a truthy value*/

const findStars = o => o.stars === 2;

let test1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, k => k.stars === 2); // => "noma"
//}, (o) => findStars(o)); (Great mentoring from T.K.)

console.log(test1);