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
    <span>First populate life by clicking some cells. Then click the button.</span>
  </div>
)

export default Header;
