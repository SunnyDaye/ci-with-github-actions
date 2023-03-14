//load node.js assertion library
const assert = require("assert");

//load calculator code
var Calculator = require("../Calculator");
var calc = new Calculator();

describe("Calculator Tests", function() {

  it("add: Adds 1 and 2", function() {
    var result = calc.add(1, 2);
    assert.equal(result, 3);
  });

  it("subtract: Subtracts 6 and 3", function() {
    var result = calc.subtract(6, 3);
    assert.equal(result, 3);
  });

  it("multiply: Multiplies 3 and 7", function() {
    var result = calc.multiply(3, 7);
    assert.equal(result, 21);
  });

  it("divide: Divides 4 and 2", function() {
    var result = calc.divide(4, 2);
    assert.equal(result, 2);
  });

});
