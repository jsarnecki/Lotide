const letterPositions = require('../letterPositions');
const assertDeepEqual = require('chai').assert.deepEqual;

describe('Tests for letterPositions', function() {
  
  it('Returns the indices [0, 19, 21, 24, 29] of "t" from the string "this is an excellent test sentence"', function() {
    const actual = letterPositions("this is an excellent test sentence");
    const expected = [0, 19, 21, 24, 29];
    assertDeepEqual(actual["t"], expected);
  });

  it('Returns [3, 6, 23, 26] of "s" from the string "this is an excellent test sentence"', function() {
    const actual = letterPositions("this is an excellent test sentence");
    const expected = [11, 14, 17, 22, 27, 30, 33];
    assertDeepEqual(actual["e"], expected);
  });

  it('Returns [2, 4, 5, 7, 8, 9, 11, 12] of "l" from the string "helollelllelloo"', function() {
    const actual = letterPositions("helollelllelloo");
    const expected = [2, 4, 5, 7, 8, 9, 11, 12];
    assertDeepEqual(actual["l"], expected);
  });

});