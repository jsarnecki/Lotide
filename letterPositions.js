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

module.exports = letterPositions;

