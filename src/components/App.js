import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import ControlPanel from './ControlPanel'
import GameOfLifeGrid from '../containers/GameOfLifeGrid'
import StatusDisplay from '../containers/StatusDisplay'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ControlPanel />
        <GameOfLifeGrid />
        <StatusDisplay />
        <Footer />
      </div>
    );
  }
}

export default App;
