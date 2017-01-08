export const takeNextStep = (grid) => ({
  type: 'STEP',
  grid
})

export const initializeCells = (grid) => ({
  type: 'INITIALIZE_CELLS',
  grid
})
