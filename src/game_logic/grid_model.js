import { shuffleArray } from './../utilities.js'
import neighborIndices from './NeighborService.js';
 
class GridModel {
  constructor(gridWidth) {
    // stores a square grid having user-provided gridWidth as a
    // an array (this.grid) having length == gridWidth * gridWith 
    this.grid = Array(gridWidth * gridWidth).fill(false);;
    this.gridWidth = this.grid.length / gridWidth;
  }

  getNextState(grid, toroidal){
    // determines the next state according to the rules of the game:
    // https://en.wikipedia.org/wiki/Conway's_Game_of_Life#Origins

    return grid.map(function(isAlive, cellIndex){
      var neighborIndexes = neighborIndices(cellIndex, grid, toroidal)
      var neighborCount = this._countNeighbors(grid, neighborIndexes);

      return this._willBeAlive(isAlive, neighborCount);
    }.bind(this));
  }

  toggleCell(grid, index){
    return grid.map(function(isAlive, cellIndex){
      if (cellIndex === index){
        return !isAlive;
      }

      return isAlive;
    });
  }

  fillGridRandom(grid, percentageFromZeroToHundred){
    let cellCount = grid.length;
    var pct = percentageFromZeroToHundred / 100;
    let numberCellToFill = Math.floor(cellCount * pct)

    var randomGrid = grid.map((key, index) => index < numberCellToFill);
    var shuffled = shuffleArray(randomGrid);
    return shuffled;
  }

  fillGrid(grid){
    var gridWidth = this._gridWidth(grid);
    var gridSize = grid.length;
    var centerStartingPoint = gridSize / 2 - gridWidth / 2;
    var i = centerStartingPoint;
    //  X  <= i
    //   X <= i + gridWith + 1
    // XXX
    var startingCellPattern = [
      i, 
      i + gridWidth + 1, 
      i + 2 * gridWidth, 
      i + 2 * gridWidth - 1, 
      i + 2 * gridWidth + 1
    ];
    // TODO use immutable.js here
    var gridCopy = grid.slice(); 
    startingCellPattern.forEach(function(cellIndex) {
      gridCopy[cellIndex] = !gridCopy[cellIndex];
    });

    return gridCopy;
  }

  _willBeAlive(isAlive, neighborCount) {
    if (isAlive) {
      return neighborCount > 1 && neighborCount < 4;
    } else {
      return neighborCount === 3;
    }
  }

  _countNeighbors(grid, neighborIndexes) {
    return neighborIndexes.filter((index) => grid[index]).length
  }

  _gridWidth(grid){
    return Math.sqrt(grid.length);
  }
}

export default GridModel;