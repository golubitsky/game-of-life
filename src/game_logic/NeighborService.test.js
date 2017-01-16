import neighborIndices from './neighborService.js';

var assert = require('assert');
describe('neighborService', function() {
  describe('#neighborIndices, toroidal=true', function() {
    it('returns correct indices for center cell', function() {
      // arrange
      // construct 3 by 3 grid; indices 0..8
		  let width = 3;
      let grid = Array(width * width).fill(false);;
      let centerIndex = 4;

      // act
      let actual = neighborIndices(centerIndex, grid, true)

      // assert
      assert.deepEqual([1,2,5,8,7,6,3,0].sort(), actual.sort());
    });

    it('returns correct indices for upper left corner cell', function() {
      // arrange
      let width = 4;
      let grid = Array(width * width).fill(false);;
      let upperLeftCornerIndex = 0;

      // act
      let actual = neighborIndices(upperLeftCornerIndex, grid, true)

      // assert
      assert.deepEqual([12,13,1,5,4,7,3,15].sort(), actual.sort());
    });

    it('returns correct indices for right side non-corner cell', function() {
      // arrange
      let width = 4;
      let grid = Array(width * width).fill(false);;
      let index = 11;

      // act
      let actual = neighborIndices(index, grid, true)

      // assert
      assert.deepEqual([4,8,12,6,10,14,7,15].sort(), actual.sort());
    });


    it('returns correct indices for bottom non-corner cell', function() {
      // arrange
      let width = 4;
      let grid = Array(width * width).fill(false);;
      let index = 13;

      // act
      let actual = neighborIndices(index, grid, true)

      // assert
      assert.deepEqual([8,9,10,12,14,0,1,2].sort(), actual.sort());
    });

    it('returns correct indices for top non-corner cell', function() {
      // arrange
      let width = 4;
      let grid = Array(width * width).fill(false);;
      let index = 2;

      // act
      let actual = neighborIndices(index, grid, true)

      // assert
      assert.deepEqual([13,14,15,1,3,5,6,7].sort(), actual.sort());
    });


    it('returns correct indices for bottom right corner cell', function() {
      // arrange
      let width = 4;
      let grid = Array(width * width).fill(false);;
      let index = 15;

      // act
      let actual = neighborIndices(index, grid, true)

      // assert
      assert.deepEqual([10,11,14,2,3,12,8,0].sort(), actual.sort());
    });

    it('returns correct indices for top right corner cell', function() {
      // arrange
      let width = 4;
      let grid = Array(width * width).fill(false);;
      let index = 3;

      // act
      let actual = neighborIndices(index, grid, true)

      // assert
      assert.deepEqual([2,6,7,14,15,0,4,12].sort(), actual.sort());
    });
  });

  describe('#neighborIndices, toroidal=false', function() {
      it('returns correct indices for center cell', function() {
      // arrange
      // construct 3 by 3 grid; indices 0..8
      let width = 3;
      let grid = Array(width * width).fill(false);;
      let centerIndex = 4;

      // act
      let actual = neighborIndices(centerIndex, grid, false)

      // assert
      assert.deepEqual([1,2,5,8,7,6,3,0].sort(), actual.sort());
    });

    it('returns correct indices for upper left corner cell', function() {
      // arrange
      let width = 4;
      let grid = Array(width * width).fill(false);;
      let upperLeftCornerIndex = 0;

      // act
      let actual = neighborIndices(upperLeftCornerIndex, grid, false)

      // assert
      assert.deepEqual([1,4,5].sort(), actual.sort());
    });

    it('returns correct indices for right side non-corner cell', function() {
      // arrange
      let width = 4;
      let grid = Array(width * width).fill(false);;
      let index = 11;

      // act
      let actual = neighborIndices(index, grid, false)

      // assert
      assert.deepEqual([6,7,10,14,15].sort(), actual.sort());
    });


    it('returns correct indices for bottom non-corner cell', function() {
      // arrange
      let width = 4;
      let grid = Array(width * width).fill(false);;
      let index = 13;

      // act
      let actual = neighborIndices(index, grid, false)

      // assert
      assert.deepEqual([8,9,10,12,14].sort(), actual.sort());
    });

    it('returns correct indices for top non-corner cell', function() {
      // arrange
      let width = 4;
      let grid = Array(width * width).fill(false);;
      let index = 2;

      // act
      let actual = neighborIndices(index, grid, false)

      // assert
      assert.deepEqual([1,3,5,6,7].sort(), actual.sort());
    });


    it('returns correct indices for bottom right corner cell', function() {
      // arrange
      let width = 4;
      let grid = Array(width * width).fill(false);;
      let index = 15;

      // act
      let actual = neighborIndices(index, grid, false)

      // assert
      assert.deepEqual([10,11,14].sort(), actual.sort());
    });

    it('returns correct indices for top right corner cell', function() {
      // arrange
      let width = 4;
      let grid = Array(width * width).fill(false);;
      let index = 3;

      // act
      let actual = neighborIndices(index, grid, false)

      // assert
      assert.deepEqual([2,6,7].sort(), actual.sort());
    });});
});