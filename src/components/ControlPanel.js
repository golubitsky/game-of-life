import React from 'react'
import InitializePatternButton from '../containers/InitializePatternButton'
import RandomDistributionSlider from '../containers/RandomDistributionSlider'
import ToroidalToggle from '../containers/ToroidalToggle'

const ControlPanel = ({ onClick, buttonText }) => (
  <div>
    <InitializePatternButton />
    <p>RandomSeeder (%)</p>
    <RandomDistributionSlider />
    <p>Toroidal Grid (on/off)</p>
    <ToroidalToggle />
  </div>
)


export default ControlPanel;
