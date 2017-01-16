import { shuffleArray } from './../utilities.js'

class GridModel {
  constructor(gridWidth) {
    // stores a square grid having user-provided gridWidth as a
    // an array (this.grid) having length == gridWidth * gridWith 
    this.grid = Array(gridWidth * gridWidth).fill(false);;
    this.gridWidth = this.grid.length / gridWidth;
  }

  getNextState(grid){
    // determines the next state according to the rules of the game:
    // https://en.wikipedia.org/wiki/Conway's_Game_of_Life#Origins

    return grid.map(function(isAlive, cellIndex){
      var neighborCount = this._countNeighbors(grid, cellIndex);

      return this._willBeAlive(isAlive, neighborCount);
    }.bind(this));
  }

  toggleCell(grid, index){
    console.log(index)
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

  _countNeighbors(grid, cellIndex) {
    return this._offsets(grid).filter(function (offset) {
      var neighborIndex = cellIndex + offset(grid);
      
      return grid[neighborIndex];
    }).length
  }

  _offsets(){
    return [
      this._up, 
      this._upRight, 
      this._right, 
      this._downRight, 
      this._down, 
      this._downLeft, 
      this._left, 
      this._upLeft
    ];
  }
  // functions to traverse from a given index in the grid
  _up =         (grid) => -this._gridWidth(grid);
  _upRight =    (grid) => -this._gridWidth(grid) + 1;
  _right =      (grid) => 1;
  _downRight =  (grid) => this._gridWidth(grid) + 1;
  _down =       (grid) => this._gridWidth(grid);
  _downLeft =   (grid) => this._gridWidth(grid) - 1;
  _left =       (grid) => -1;
  _upLeft =     (grid) => -this._gridWidth(grid) - 1;

  _gridWidth(grid){
    return Math.sqrt(grid.length);
  }
}

export default GridModel;