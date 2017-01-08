import React, { Component } from 'react';
import './App.css';
import GameOfLifeGrid from '../containers/GameOfLifeGrid'
import Grid from './Grid';
import Button from './Button'

class App extends Component {
  beginGame(){
    // somehow tell grid to begin game
    alert("hey")
  }

  render() {
    return (
      <div>
        <GameOfLifeGrid />
        <Button handleClick={this.beginGame} />
      </div>
    );
  }
}

export default App;
