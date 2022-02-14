const assert = require('chai').assert;
const head = require('../head');

describe("#head", function() {

  it('returns 5 for [5, 6, 7]', function() {
    assert.strictEqual(head([5, 6, 7]), 5);
  });

  it('returns "Hello" for ["Hello", "Lighthouse", "Labs"]', function() {
    assert(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it('returns 12 for [12, 36, 89]', function() {
    assert(head([12, 36, 89]), 12);
  });

});