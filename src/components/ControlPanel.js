import React from 'react'
import InitializePatternButton from '../containers/InitializePatternButton'
import RandomDistributionSlider from '../containers/RandomDistributionSlider'

const ControlPanel = ({ onClick, buttonText }) => (
  <div>
    <InitializePatternButton />
    <RandomDistributionSlider />
  </div>
)


export default ControlPanel;
