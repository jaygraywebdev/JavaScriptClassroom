/*
  Edit the lines below to match your directory.
  What do you think these lines are doing? 
*/

var sum = require('../students/nicole/sum')
var diff = () => {};



/*
## DO NOT EDIT BELOW THIS LINE ## 
*/
var expect = require('chai').expect;

describe('#sum()', function() {
  context('with arguments', function() {
    it('should return 0', function() {
      expect(sum()).to.equal(0)
    })
  })
  context('with two arguments', function() {
    it('should return sum of arguments', function() {
      expect(sum(1, 2)).to.equal(3);
    })
    it('should return one argument when only one argument is passed', function() {
      expect(sum(5)).to.equal(5)
    })
  })
})

describe('#diff()', function() {
  context('without arguments', function() {
    it('should return 0', function() {
      expect(diff()).to.equal(0)
    })
  })
  context('with two arguments', function() {
    it('should return difference between two arguments', function() {
      expect(diff(1, 2)).to.equal(-1);
    })
    it('should return argument when only one argument is passed', function() {
      expect(diff(5)).to.equal(5)
    })
  })
})