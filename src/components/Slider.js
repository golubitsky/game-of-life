require('rc-slider/assets/index.css');

var React = require('react');
var SliderComp = require('rc-slider');

const Slider = ({ onChange, min, max, value }) => (
  <SliderComp 
    style={
      {
        width: 200
      }
    }
    min={ min }
    max={ max }
    value={ value }
    onChange={ onChange }
  />
)


export default Slider;
