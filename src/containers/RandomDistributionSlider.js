import { connect } from 'react-redux'
import { initializeRandom } from '../actions'
import Slider from '../components/Slider'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    ...ownProps,
    onChange: (percentage) => dispatch(initializeRandom(percentage))
})

const RandomDistributionSlider = connect(
  mapStateToProps,
  mapDispatchToProps
)(Slider)

export default RandomDistributionSlider
