import React, { Component } from 'react';
import './square.css';
import classNames from 'classnames';

class Square extends Component {
  render() {
    var status = classNames('square', { alive: this.props.isAlive });

    return (
      <div className={status}></div>
    );
  }
}

export default Square;
