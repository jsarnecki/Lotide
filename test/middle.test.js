const middle = require('../middle');
const assertDeepEqual = require('chai').assert.deepEqual;

describe('Testing for middle', function() {

  it('returns [2] when given [1, 2, 3]', function() {
    assertDeepEqual(middle([1, 2, 3]), [2]);
  });

  it('returns [3] when given [1, 2, 3, 4, 5]', function() {
    const actual = [1, 2, 3, 4, 5];
    const expected = [3];
    assertDeepEqual(middle(actual), expected);
  });

  it('returns [] when given [1]', function() {
    const actual = [1];
    const expected = [];
    assertDeepEqual(middle(actual), expected);
  });

  it('returns [2, 3] when given [1, 2, 3, 4]', function() {
    const actual = [1, 2, 3, 4];
    const expected = [2, 3];
    assertDeepEqual(middle(actual), expected);
  });

});

// console.log(assertDeepEqual(middle([1, 2, 3, 4]), [3, 4])); //Fail

