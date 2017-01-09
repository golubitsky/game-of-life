import React from 'react';

const Button = ({ onClick, buttonText }) => (
  <button onClick={ () => onClick() }>
    {buttonText}
  </button>
)


export default Button;
