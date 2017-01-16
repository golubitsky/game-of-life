import { connect } from 'react-redux'
import { toggleToroidal } from '../actions'
import Slider from '../components/Slider'

const currentValue = (state) => state.isToroidal ? 1 : 0;
const mapStateToProps = (state, ownProps) => ({
  min: 0,
  max: 1,
  value: currentValue(state)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    ...ownProps,
    onChange: (percentage) => dispatch(toggleToroidal())
})

const ToroidalToggle = connect(
  mapStateToProps,
  mapDispatchToProps
)(Slider)

export default ToroidalToggle
