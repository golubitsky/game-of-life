import React, { PropTypes } from 'react';
import Cell from './Cell.js';

// currently cellSizePixels determines the size of the grid
// while the top-most reducer specifies the number of cells in the grid;
// both are hardcoded for now.
let cellSizePixels = 20;

let determineGridSize = (grid) => {
  return {
    width: Math.sqrt(grid.length) * cellSizePixels,
    height: Math.sqrt(grid.length) * cellSizePixels
  }
}

const Grid = ({ grid, onCellClick }) => (
  <div 
    style={determineGridSize(grid)} 
  >
    {grid.map((isAlive, cellIndex) =>
      <Cell 
        key={cellIndex.toString()} 
        displaySize={cellSizePixels}
        isAlive={isAlive}
        onClick={() => onCellClick(cellIndex)}
      />
    )}
  </div>
)


Grid.propTypes = {
  grid: PropTypes.array.isRequired,
  onCellClick: PropTypes.func.isRequired
}

export default Grid;