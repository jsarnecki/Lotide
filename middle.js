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
  }
  if (arr.length % 2 === 1) {
    //Odd length, so - 1 to make even, then divide
    let mid = (arr.length - 1) / 2;
    result.push(arr[mid]);
  }
  return result;
};

module.exports = middle;