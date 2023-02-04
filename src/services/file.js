// Imports
const fs = require('fs')
const path = require('path')
require('colors')

const outputDir = path.join(__dirname, '../../output')

// Create output folder
const createOutput = () => {
  try {
    fs.mkdirSync(outputDir)
  } catch (error) {
    console.warn('Output folder found!'.bgGreen + '\n')
  }
}

const writeFile = (buffer, fileName) => {
  try {
    console.warn('Writting output file...'.bgYellow + '\n')
    fs.writeFileSync(`${outputDir}/${fileName}`, buffer)
  } catch (error) {
    throw new Error(error)
  }
}

// Exports
module.exports = { createOutput, writeFile }
