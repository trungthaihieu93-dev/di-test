'use strict'
require('colors')

const parseTable = (url) => {
  try {
    console.warn('Parsing table...'.bgYellow + '\n')
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = { parseTable }
