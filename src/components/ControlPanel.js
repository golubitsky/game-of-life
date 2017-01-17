import React from 'react'
import StartStopButton from '../containers/StartStopButton'
import RandomDistributionSlider from '../containers/RandomDistributionSlider'
import ToroidalToggle from '../containers/ToroidalToggle'

const ControlPanel = ({ onClick, buttonText }) => (
  <div>
    <p>RandomSeeder (%)</p>
    <RandomDistributionSlider />
    <p>Toroidal Grid (on/off)</p>
    <ToroidalToggle />
    <StartStopButton />
  </div>
)


export default ControlPanel;
