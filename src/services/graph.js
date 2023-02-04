'use strict'
// Imports
const {} = require('nodeplotlib')
const { checkDate, parseDate } = require('../utils/datetime')

const drawBarGraph = async (data) => {
  try {
    console.warn('Plotting bar graph...'.bgYellow + '\n')
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = { drawBarGraph }
