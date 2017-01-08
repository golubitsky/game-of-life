class GridModel {
  constructor(gridWidth) {
    // stores a square grid having user-provided gridWidth as a
    // an array (this.grid) having length == gridWidth * gridWith 
    this.grid = Array(gridWidth * gridWidth).fill(false);;
    this.gridWidth = this.grid.length / gridWidth;
    this._fillGrid();
  }

  getNextState(){
    // determines the next state according to the rules of the game:
    // https://en.wikipedia.org/wiki/Conway's_Game_of_Life#Origins

    var array = this.grid.map(function(currentCellState, cellIndex){
      return this._isAlive(cellIndex);
    }.bind(this));

    return array;
  }

  _fillGrid(){
    var centerStartingPoint = this.grid.length / 2 - this.gridWidth;
    var i = centerStartingPoint;

    //  X  <= i
    //   X <= i + gridWith + 1
    // XXX
    var startingCellPattern = [i, 
      i + this.gridWidth + 1, 
      i + 2 * this.gridWidth, 
      i + 2 * this.gridWidth - 1, 
      i + 2 * this.gridWidth + 1];
    
    startingCellPattern.forEach(function(cellIndex) {
      this.grid[cellIndex] = true;
    }.bind(this));
  }


  _isAlive(cellIndex) {
    var neighbors = this._countNeighbors(cellIndex);

    if (this.grid[cellIndex]) {
      return neighbors > 1 && neighbors < 4;
    } else {
      return neighbors === 3;
    }
  }

  _countNeighbors(cellIndex) {
    return _offsets.filter(function (offset) {
      var neighborIndex = cellIndex + offset;
      return this.grid[neighborIndex];
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