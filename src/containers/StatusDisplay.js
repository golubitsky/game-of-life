import { connect } from 'react-redux'
import Display from '../components/Display'

const mapStateToProps = (state, ownProps) => ({
  value: state.grid.filter(x => x).length
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

const StatusDisplay = connect(
  mapStateToProps,
  mapDispatchToProps
)(Display)

export default StatusDisplay
