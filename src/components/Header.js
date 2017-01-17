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
    <span>Click the grid or use the RandomSeeder. Then click the button. Life goes on according to the rules linked above.</span>
  </div>
)

export default Header;
