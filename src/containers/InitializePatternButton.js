import { connect } from 'react-redux'
import { startGame, pauseGame, takeNextStep } from '../actions'
import Button from '../components/Button'

const toggleGame = (isRunning, dispatch) => {
  if(isRunning){
    dispatch(pauseGame())
    return;
  }

  const interval = setInterval(() => {
    dispatch(takeNextStep())
  }, 100);
  
  dispatch(startGame(interval));
}

const buttonText = (isRunning) => {
  return isRunning ? "Pause" : "Click me to start!"
}

const mapStateToProps = (state, ownProps) => ({
  buttonText: buttonText(state.isRunning),
  isRunning: state.isRunning
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  dispatch
})

function mergeProps(stateProps, dispatchProps, ownProps) {
  const { buttonText, isRunning } = stateProps;
  const { dispatch } = dispatchProps;
  
  return {
    ...ownProps,
    buttonText,
    onClick: () => toggleGame(isRunning, dispatch)
  };
}

const InitializePatternButton = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Button)

export default InitializePatternButton
