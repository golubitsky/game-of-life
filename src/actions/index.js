export const takeNextStep = () => ({
  type: 'STEP'
})

// currently not used, 
// possibly use later to initialize specific patterns 
export const initializeCells = () => ({
  type: 'INITIALIZE_CELLS'
})

export const createLife = (cellIndex) => ({
  type: 'CREATE_LIFE',
  cellIndex
})

export const startGame = (interval) => ({
  type: 'START_GAME',
  interval
})

export const pauseGame = () => ({
  type: 'PAUSE_GAME'
})