var Calculator = require('../server/calculator.js');
var assert = require('assert');

describe('Calculator', function() {
  describe('add', function() {
    it('should add two numbers', function() {
      var res = Calculator.add(2,2);
      assert.equal(res, 4);
    });
  });
});