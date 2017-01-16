require('rc-slider/assets/index.css');

var React = require('react');
var SliderComp = require('rc-slider');

const Slider = ({ onChange, min, max }) => (
  <SliderComp 
    style={
      {
        width: 200
      }
    }
    min={ min }
    max={ max }
    onChange={ onChange }
  />
)


export default Slider;
