import { connect } from 'react-redux'
import { createLife } from '../actions'
import Grid from '../components/Grid'

const mapStateToProps = (state, ownProps) => ({
  grid: state.grid
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onCellClick: (cellIndex) => {
    dispatch(createLife(cellIndex))
  }
})

const GameOfLifeGrid = connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid)

export default GameOfLifeGrid
