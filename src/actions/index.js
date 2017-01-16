export const takeNextStep = () => ({
  type: 'STEP'
})

export const initializeRandom = (percentage) => ({
  type: 'INITIALIZE_RANDOM',
  percentage
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