const tail = require('../tail');
const assertDeepEqual = require('chai').assert.deepEqual;

const list = [1, 2, 3, 4, 5];

describe("Testing for tail", function() {

  it('Returns [2, 3, 4] when given [1, 2, 3, 4]', function() {

    assertDeepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);

  });

  it('returns [2, 3, 4, 5] when given [1, 2, 3, 4, 5]', function() {

    assertDeepEqual(tail(list), [2, 3, 4, 5]);

  });

  it('returns ["Romans", "Countrymen"] when given ["Friends", "Romans", "Countrymen"]', function() {

    const actual = ["Friends", "Romans", "Countrymen"];
    const expected = ["Romans", "Countrymen"];
    assertDeepEqual(tail(actual), expected);

  });

});