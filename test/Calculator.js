//load node.js assertion library
const assert = require("assert");

//load chai assertion library
const chai = require("chai");
const expect = chai.expect;
const asserttype = require('chai-asserttype');
chai.use(asserttype);

//load calculator code
var Calculator = require("../Calculator");
var calc = new Calculator();

describe("Calculator Tests", function() {

  it("add: Adds 1 and 2", function() {
    var result = calc.add(1, 2);
    expect(result).to.be.equal(3);
  });

  it("Add Allows one parameter", function() {
    expect(calc.add(1)).to.be.equal(1);
  });

  it("Add Allows no parameters", function() {
    expect(calc.add()).to.be.equal(0);
  });

  it("Add turns strings to zeros", function() {
    expect(calc.add("frog", "toad")).to.be.number();
  });

  it("subtract: Subtracts 6 and 3", function() {
    var result = calc.subtract(6, 3);
    expect(result).to.be.equal(3);
  });

  it("multiply: Multiplies 3 and 7", function() {
    var result = calc.multiply(3, 7);
    expect(result).to.be.equal(21);
  });

  it("divide: Divides 4 and 2", function() {
    var result = calc.divide(4, 2);
    expect(result).to.be.equal(2);
  });

});
