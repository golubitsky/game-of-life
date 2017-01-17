import React from 'react'
import CellCountChart from '../containers/CellCountChart'
const Footer = () => (
  <div>
    <CellCountChart />
    <a target="_blank"
          href="https://github.com/golubitsky/game-of-life">
          Source
    </a>
  </div>
)

export default Footer;