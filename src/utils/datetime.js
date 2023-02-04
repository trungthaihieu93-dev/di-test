'use strict'
// Imports
const moment = require('moment')

// Check valid date
const checkDate = (input) => {
  try {
    return moment(input).isValid()
  } catch (error) {
    console.error(error)
  }

  return null
}

// Parse Date
const parseDate = (input, format) => {
  try {
    return moment(input).format(format)
  } catch (error) {
    console.error(error)
  }

  return null
}

module.exports = { checkDate, parseDate }
