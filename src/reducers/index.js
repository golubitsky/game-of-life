import { combineReducers } from 'redux'
import GridModel from './game_logic/grid_model'

const gridModel = new GridModel(40);

export default (state = { grid: gridModel.grid }, action) => {
  switch (action.type) {
    case 'INITIALIZE_CELLS':
      return {
        ...state,
        grid: gridModel.fillGrid(state.grid)
      }
    case 'STEP':
      console.log("STEP")
      var next = gridModel.getNextState(state.grid);
      // console.log(next)
      return {
        ...state,
        grid: next
      }
    default:
      return state
  }
}
