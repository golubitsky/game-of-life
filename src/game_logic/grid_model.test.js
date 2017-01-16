import GridModel from './grid_model.js';

var assert = require('assert');
describe('GridModel', function() {
  describe('#constructor()', function() {
    it('should return "GridModel"', function() {
		  var sut = new GridModel(10);

      assert.equal(10, sut.gridWidth);
    });
  });
});

describe('GridModel', function() {
  describe('#getNextState()', function() {
    it('works according to rules of the game', function() {
      // arrange
      var sut = new GridModel(10);
      var grid = sut.fillGrid(sut.grid);
      
      // act
      var actual = sut.getNextState(grid);

      // assert
      var expected = [54, 56, 65, 66, 75];
      expected.forEach(function(i){
        assert.ok(actual[i], `Expected alive at ${i} but was dead`);
      });

      assert.equal(5, actual.filter((x)=> x).length)
    });
  });
});