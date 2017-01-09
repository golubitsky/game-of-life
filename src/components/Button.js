import React, { Component } from 'react';

const Button = ({ grid, onClick }) => (
  <button
    onClick={() => onClick(grid)}
  >Click me
  </button>
)


export default Button;
