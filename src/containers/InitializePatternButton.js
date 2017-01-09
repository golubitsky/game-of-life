import { connect } from 'react-redux'
import { takeNextStep } from '../actions'
import Button from '../components/Button'

const mapStateToProps = (state, ownProps) => ({
  grid: state.grid
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  dispatch
})

function mergeProps(stateProps, dispatchProps, ownProps) {
  const { grid } = stateProps;
  const { dispatch } = dispatchProps;

  return {
    ...ownProps,
    onClick: () => dispatch(takeNextStep(grid))
  };
}

const InitializePatternButton = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Button)

export default InitializePatternButton
