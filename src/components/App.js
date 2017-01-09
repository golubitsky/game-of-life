import React, { Component } from 'react';
import './App.css';
import GameOfLifeGrid from '../containers/GameOfLifeGrid'
import InitializePatternButton from '../containers/InitializePatternButton'

class App extends Component {
  beginGame(){
    // somehow tell grid to begin game
    alert("hey")
  }

  render() {
    return (
      <div>
        <GameOfLifeGrid />
        <InitializePatternButton />
      </div>
    );
  }
}

export default App;
