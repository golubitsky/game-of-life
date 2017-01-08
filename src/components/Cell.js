import React, { Component } from 'react';
import './Cell.css';
import classNames from 'classnames';

class Cell extends Component {
  render() {
    var status = classNames('square', { alive: this.props.isAlive });

    return (
      <div className={status}
          onClick={ () => alert(this.props.index) }
        ></div>
    );
  }
}

export default Cell;
