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

