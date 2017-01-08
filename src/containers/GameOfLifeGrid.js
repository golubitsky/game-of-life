import { connect } from 'react-redux'
import { initializeCells, takeNextStep } from '../actions'
import Grid from '../components/Grid'

const mapStateToProps = (state, ownProps) => ({
  grid: state.grid
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onCellClick: () => {
    dispatch(initializeCells())
  }
})

const GameOfLifeGrid = connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid)

export default GameOfLifeGrid
