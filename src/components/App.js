import React, { Component } from 'react';
import './App.css';
import Grid from './Grid.js';
import Button from './Button.js'

class App extends Component {
  beginGame(){
    // somehow tell grid to begin game
    alert("hey")
  }

  render() {
    return (
      <div>
        <Grid/>
        <Button handleClick={this.beginGame} />
      </div>
    );
  }
}

export default App;
