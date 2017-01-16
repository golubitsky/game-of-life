export const takeNextStep = () => ({
  type: 'STEP'
})

export const initializeRandom = (percentage) => ({
  type: 'INITIALIZE_RANDOM',
  percentage
})

export const toggleToroidal = () => ({
  type: 'TOGGLE_TOROIDAL'
})

export const toggleCell = (cellIndex) => ({
  type: 'TOGGLE_CELL',
  cellIndex
})

export const startGame = (interval) => ({
  type: 'START_GAME',
  interval
})

export const pauseGame = () => ({
  type: 'PAUSE_GAME'
})