'use strict'
// Imports
const puppeteer = require('puppeteer')
require('colors')

// Get Puppeteer Browser
const getPage = async (url) => {
  const browser = await puppeteer.launch()

  const page = await browser.newPage()

  await page.goto(url)

  return page
}

const parseTable = async (url) => {
  try {
    console.warn('Parsing table...'.bgYellow + '\n')
    const page = await getPage(url)

    const rawData = await page.evaluate(() => {
      const rowQueries = `.wikitable tr td`

      const tds = Array.from(document.querySelectorAll(rowQueries))

      return tds.map((th) => th.innerText)
    })

    console.log(rawData)
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = { parseTable }
