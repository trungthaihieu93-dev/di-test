'use strict'
const {} = require('nodeplotlib')

const drawBarGraph = (data) => {
  try {
    console.warn('Plotting bar graph...'.bgYellow + '\n')
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = { drawBarGraph }
