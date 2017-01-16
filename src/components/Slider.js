require('rc-slider/assets/index.css');

var React = require('react');
var SliderComp = require('rc-slider');

const Slider = ({ onChange }) => (
  <SliderComp 
    style={
      {
        width: 200
      }
    }
    onChange={ onChange }
  />
)


export default Slider;
