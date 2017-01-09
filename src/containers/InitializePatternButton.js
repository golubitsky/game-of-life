import { connect } from 'react-redux'
import { takeNextStep } from '../actions'
import Button from '../components/Button'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(takeNextStep())
})

const InitializePatternButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default InitializePatternButton
