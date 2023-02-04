// Imports
require('colors')
require('dotenv').config()

const { createOutput, writeSvgAndPng } = require('./services/file')
const { parseTable } = require('./services/puppeteer')
const { drawBarGraph } = require('./services/graph')

// Entry
const main = () =>
  new Promise(async (res, rej) => {
    // Get and check URL
    const url = process.env.URL
    if (!url || !url.includes('wikipedia')) {
      rej('URL not provided or invalid! Please check .env file\n')
      return
    }
    try {
      // Create output folder
      createOutput()

      // Parse web url for metrics
      const className = process.env.CLASS_NAME
      const parsedData = await parseTable(url, className)

      // Plot graph
      const svgBuffer = drawBarGraph(parsedData)

      // Write file
      writeSvgAndPng(svgBuffer)

      // Done process
      res()
    } catch (error) {
      rej(error)
    }
  })

// Execute
main()
  .then(
    (_) => {
      console.log('Done process! Please check output folder'.bgGreen)
      console.log('\n')
    },
    // ** Success **
  )
  .catch((err) => {
    console.error('Error while processing!'.bgRed)
    console.error(err)
    process.exit(1)
    // ** Throw Error **
  })
  .finally((_) => process.exit(0)) // ** End Process **
