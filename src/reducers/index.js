import GridModel from './../game_logic/grid_model'

const gridModel = new GridModel(40);

let initialState = { 
  grid: gridModel.grid, 
  isRunning: false,
  isToroidal: false,
  interval: null,
  cellCountHistory: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_CELL':
      return {
        ...state,
        grid: gridModel.toggleCell(state.grid, action.cellIndex)
      }
    case 'TOGGLE_TOROIDAL':
      return {
        ...state,
        isToroidal: !state.isToroidal
      } 
    case 'INITIALIZE_RANDOM':
      return {
        ...state,
        grid: gridModel.fillGridRandom(state.grid, action.percentage)
      }
    case 'STEP':
      let grid = gridModel.getNextState(state.grid, state.isToroidal);
      let cellCount = grid.filter(x => x).length;
      return {
        ...state,
        grid: grid,
        cellCountHistory: state.cellCountHistory.concat({
          index: state.cellCountHistory.length,
          cellCount: cellCount
        })
      }
    case 'START_GAME':
      return {
        ...state,
        grid: gridModel.getNextState(state.grid, state.isToroidal),
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
