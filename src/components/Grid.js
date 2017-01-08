import React, { Component } from 'react';
import './grid.css';
import Cell from './Cell.js';

class Grid extends Component {
  constructor() {
    super();
    this.state = this.getInitialState();

    setInterval(() => {
      this.setState({ cells: this.updateCells() });
    }, 50);
  }

  getInitialState() {
    var size = 50;
    var cells = Array(size * size).fill(false);
    var i = 475;
    [i, i + size + 1, i + 2 * size, i + 2 * size - 1, i + 2 * size + 1].forEach(function(cell) {
      cells[cell] = true;
    });

    return {cells: cells, size: size };
  }

  toggle() {
    return this.state.cells.map(function(isAlive, i){
      return !isAlive;
    });
  }

  updateCells(){
    var array = this.state.cells.map(function(x, i){
      return this.isAlive(i);
    }.bind(this));

    return array;
  }

  isAlive(i) {
    var neighbors = this.countNeighbors(i);
    // if alive
    if (this.state.cells[i]) {
      return neighbors > 1 && neighbors < 4;
    } else {
      return neighbors === 3;
    }
  }

  countNeighbors(i) {
    var size = this.state.size;
    var offsets = [-size - 1, -size, -size + 1, -1, 1, size - 1, size, size + 1];

    return offsets.filter(function (offset) {
      var neighborIndex = i + offset;
      return this.state.cells[neighborIndex];
    }.bind(this)).length
  }

  renderCells(){
    return this.state.cells.map(function(isAlive, i){
      return this.renderSquare(i, isAlive);
    }.bind(this))
  }

  renderSquare(i, isAlive){
    return <Cell key={i.toString()} 
                  index={i}
                  isAlive={isAlive}/>;
  }

  render() {
    return (
      <div className="grid">
        {this.renderCells()}
      </div>
    );
  }
}

export default Grid;