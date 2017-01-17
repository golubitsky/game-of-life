import { connect } from 'react-redux'
import Chart from '../components/Chart'

const mapStateToProps = (state, ownProps) => ({
  chartData: state.cellCountHistory
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

const CellCountChart = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chart)

export default CellCountChart
