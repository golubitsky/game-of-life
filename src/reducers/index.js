import GridModel from './game_logic/grid_model'

const gridModel = new GridModel(40);

export default (state = { grid: gridModel.grid, isRunning: false, interval: null }, action) => {
  switch (action.type) {
    case 'CREATE_LIFE':
      return {
        ...state,
        grid: gridModel.createLife(state.grid, action.cellIndex)
      }
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
    case 'START_GAME':
      return {
        ...state,
        grid: gridModel.getNextState(state.grid),
        interval: action.interval,
        isRunning: true
      }
    case 'PAUSE_GAME':
      clearInterval(state.interval);
      
      return {
        ...state,
        interval: null,
        isRunning: false
      }
    default:
      return state
  }
}
