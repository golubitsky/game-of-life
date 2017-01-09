import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import GameOfLifeGrid from '../containers/GameOfLifeGrid'
import InitializePatternButton from '../containers/InitializePatternButton'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <InitializePatternButton />
        <GameOfLifeGrid />
      </div>
    );
  }
}

export default App;
