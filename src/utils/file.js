const fs = require('fs')
const path = require('path')
require('colors')

const outputDir = path.join(__dirname, '../../output')

// Create output folder
const createOutput = () => {
  try {
    fs.mkdirSync(outputDir)
  } catch (error) {
    console.warn('Output folder found!'.bgGreen)
  }
}

const writeFile = (buffer) => {
  try {
    fs.writeFileSync(`${outputDir}/data.png`, buffer)
  } catch (error) {
    console.error(error)
  }
}

// Exports
module.exports = { createOutput, writeFile }
