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

    return grid.map(function(currentCellState, cellIndex){
      return this._isAlive(grid, cellIndex);
    }.bind(this));
  }

  fillGrid(grid){
    var gridWidth = Math.sqrt(grid.length);
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
    }.bind(this));

    return gridCopy;
  }

  _isAlive(grid, cellIndex) {
    var neighbors = this._countNeighbors(grid, cellIndex);

    if (grid[cellIndex]) {
      return neighbors > 1 && neighbors < 4;
    } else {
      return neighbors === 3;
    }
  }

  _countNeighbors(grid, cellIndex) {
    return this._offsets().filter(function (offset) {
      var neighborIndex = cellIndex + offset;
      return grid[neighborIndex];
    }.bind(this)).length
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
  _up = this.gridWidth;
  _upRight = this.gridWidth + 1;
  _right = 1;
  _downRight = this.gridWidth + 1;
  _down = this.gridWidth;
  _downLeft = this.gridWidth - 1;
  _left = 1;
  _upLeft = this.gridWidth - 1;
}

export default GridModel;