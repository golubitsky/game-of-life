import { combineReducers } from 'redux'
import GridModel from './game_logic/grid_model'

const gridModel = new GridModel(10);

export default (state = { grid: gridModel.grid }, action) => {
  switch (action.type) {
    case 'INITIALIZE_CELLS':
      return {
        ...state,
        grid: gridModel.fillGrid(state.grid)
      }
    case 'STEP':
      return {
        ...state,
        grid: gridModel.getNextState(state.grid)
      }
    default:
      return state
  }
}
