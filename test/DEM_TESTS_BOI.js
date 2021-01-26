
// import var canDrinkLegally = require('./students/jgray/canDrinkLegally)
var canDrinkLegally = function() {};

var expect = require('chai').expect;

describe('#canDrinkLegally()', function() {
  context('Without arguments', function() {
    it('should return false', function() {
      expect(canDrinkLegally()).to.equal(false)
    })
  })
  context('With arguments', function() {
    it('should accept only number arguments', function() {
      expect(canDrinkLegally()).to.be.a('boolean')
    })
    it('should return false is age is under 21', function() {
      expect(canDrinkLegally(19)).to.equal(false)
    })
    it('should return true is age is over 21', function() {
      expect(canDrinkLegally(22)).to.equal(true)
    })
  })
})