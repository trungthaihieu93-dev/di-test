// Imports
require('colors')
require('dotenv').config()

const { createOutput, writeFile } = require('./services/file')
const { parseTable } = require('./services/pupeteer')
const { drawBarGraph } = require('./services/graph')
const { checkDate } = require('./utils/datetime')

// Entry
const main = () =>
  new Promise((res, rej) => {
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
      parseTable()

      // Plot graph
      drawBarGraph()

      // Write file
      writeFile()

      // Done process
      res()
    } catch (error) {
      rej(error)
    }
  })

// Execute
main()
  .then(
    (_) => console.log('Done process! Please check output folder.\n'.bgGreen),
    // ** End Process **
  )
  .catch((err) => {
    console.error('Error while processing!'.bgRed)
    console.error(`Error: ${err}`)
    // ** Throw Error **
  })
