const _isRightSide = (index, gridWidth) => {
  return (index + 1) % gridWidth === 0;
};

const _isLeftSide = (index, gridWidth) => {
  return index % gridWidth === 0;
};

const _isBottomRow = (index, gridWidth) => {
  return index >= gridWidth * gridWidth - gridWidth
};

const _isTopRow = (index, gridWidth) => index < gridWidth;

// functions to traverse from a given index in the grid
const _up = (index, gridWidth, toroidal) => {
  let standard = index - gridWidth;
  let offset = 0;

  if (_isTopRow(index, gridWidth)) {
    if (!toroidal)
      return null;
    offset += (gridWidth * gridWidth);
  }

  return standard + offset;
}

const _upRight = (index, gridWidth, toroidal) => {
  let standard = index - gridWidth + 1;
  let offset = 0;

  if (_isTopRow(index, gridWidth)){
    if (!toroidal)
      return null;
    
    offset += (gridWidth * gridWidth);
  }

  if (_isRightSide(index, gridWidth)){
    if (!toroidal)
      return null;

    offset -= gridWidth;
  }

  return standard + offset;
};
const _right = (index, gridWidth, toroidal) => {
  let standard = index + 1;
  let offset = 0;

  if (_isRightSide(index, gridWidth)){
    if (!toroidal)
      return null; 
    
    offset -= gridWidth;
  }

  return standard + offset;
}
const _downRight =  (index, gridWidth, toroidal) => {
  let standard = index + gridWidth + 1;
  let offset = 0;

  if (_isBottomRow(index, gridWidth)){
    if (!toroidal)
      return null; 
    
    offset -= gridWidth * gridWidth;
  }

  if (_isRightSide(index, gridWidth)){
    if (!toroidal)
      return null; 
    
    offset -= gridWidth;
  }
  
  return standard + offset;
}
const _down = (index, gridWidth, toroidal) => {
  let standard = index + gridWidth;
  let offset = 0;

  if (_isBottomRow(index, gridWidth)){
    if (!toroidal)
      return null; 
    
    offset -= gridWidth * gridWidth;
  }

  return standard + offset;
}
const _downLeft = (index, gridWidth, toroidal) => {
  let standard = index + gridWidth - 1;
  let offset = 0;

  if (_isBottomRow(index, gridWidth)){
    if (!toroidal)
      return null; 
    
    offset -= gridWidth * gridWidth;
  }

  if (_isLeftSide(index, gridWidth)){
    if (!toroidal)
      return null; 
    
    offset += gridWidth;
  }

  return standard + offset;
}
const _left = (index, gridWidth, toroidal) => {
  let standard = index + -1;
  let offset = 0;

  if (_isLeftSide(index, gridWidth)){
    if (!toroidal)
      return null; 
    
    offset += gridWidth;
  }

  return standard + offset;
}
const _upLeft = (index, gridWidth, toroidal) => {
  let standard = index - gridWidth - 1;
  let offset = 0;

  if (_isTopRow(index, gridWidth)){
    if (!toroidal)
      return null; 
    
    offset += gridWidth * gridWidth;
  }

  if (_isLeftSide(index, gridWidth)){
    if (!toroidal)
      return null; 
    
    offset += gridWidth;
  }

  return standard + offset;
}

const _offsets = {
  up: _up, 
  upRight: _upRight, 
  right:  _right, 
  downRight: _downRight, 
  down: _down, 
  downLeft: _downLeft, 
  left: _left, 
  upLeft: _upLeft
};

const neighborIndices = (cellIndex, grid, toroidal) => {
  let gridWidth = Math.sqrt(grid.length);

  return Object.keys(_offsets).map((offsetName) => {
    let offset = _offsets[offsetName];

    return offset(cellIndex, gridWidth, toroidal);
  }).filter((x) => x != null)
}

export default neighborIndices;