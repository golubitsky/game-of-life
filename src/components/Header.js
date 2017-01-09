import React from 'react'

const Header = () => (
  <div>
    <h2
      style={{
        color: 'green'
      }}
    > 
      <a target="_blank"
          href="https://en.wikipedia.org/wiki/Conway's_Game_of_Life">
          Conway's Game of Life
      </a>
    </h2>
    <span>Click any cell to create life there.</span>
  </div>
)

export default Header;
