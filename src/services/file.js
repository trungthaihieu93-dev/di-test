// Imports
const fs = require('fs')
const path = require('path')
const sharp = require('sharp')
require('colors')

const outputDir = path.join(__dirname, '../../output')

// Create output folder
const createOutput = () => {
  try {
    fs.mkdirSync(outputDir)

    console.warn('Created output folder!'.bgGreen + '\n')
  } catch (error) {
    console.warn('Output folder found!'.bgGreen + '\n')
  }
}

const writeSvgAndPng = (svgBuffer) => {
  try {
    console.warn('Writting output file...'.bgYellow + '\n')
    fs.writeFileSync(`${outputDir}/output.svg`, svgBuffer)
    // Convert the SVG into a PNG.
    sharp(`${outputDir}/output.svg`)
      .png()
      .toFile(`${outputDir}/output.png`)
      .catch((err) => {
        console.log(err)
      })
  } catch (error) {
    throw new Error(error)
  }
}

// Exports
module.exports = { createOutput, writeSvgAndPng }
