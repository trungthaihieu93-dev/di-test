'use strict'
// Imports
const puppeteer = require('puppeteer')
require('colors')
const _ = require('lodash')

const { checkDate, parseDate } = require('../utils/datetime')

// Get Puppeteer Browser
const getPage = async (url) => {
  const browser = await puppeteer.launch()

  const page = await browser.newPage()

  console.warn(`Going to this website ${url}...`.bgYellow + '\n')

  await page.goto(url)

  return page
}

// Parse Table
const parseTable = async (url) => {
  try {
    // Get Page
    const page = await getPage(url)

    console.warn('Evaluating...'.bgYellow + '\n')

    // Evaluating Data
    const rawData = await page.evaluate(() => {
      // TODO: puppeteer cannot get env var
      const className = 'wikitable'
      const headCountQuery = `.${className} tr th`
      const dataQuery = `.${className} tbody tr td`

      const colCount = Array.from(document.querySelectorAll(headCountQuery))
        .length

      const tds = Array.from(document.querySelectorAll(dataQuery))

      return {
        data: tds.map((td) => td.innerText),
        colCount,
      }
    })

    const { data, colCount } = rawData

    // Parsing data
    console.warn('Parsing table...'.bgYellow + '\n')
    const parsedData = data.reduce((data, nextItem, index) => {
      // New item
      let tempData = data
      if (index % colCount === 0) {
        tempData = [...tempData, {}]
      }

      const currentItemIndex = tempData.length - 1

      // Name
      if (nextItem.charCodeAt(0) === 160) {
        tempData[currentItemIndex] = Object.assign(tempData[currentItemIndex], {
          label: nextItem.trim(),
        })
      }
      // Number
      else if (_.isNumber(new Number(nextItem[0]))) {
        // Numeric
        if (!tempData[currentItemIndex].y && !checkDate(nextItem)) {
          tempData[currentItemIndex] = Object.assign(
            tempData[currentItemIndex],
            {
              y: parseFloat(nextItem.split('m')[0].trim()),
            },
          )
        } else if (!tempData[currentItemIndex].x && checkDate(nextItem)) {
          // Date
          tempData[currentItemIndex] = Object.assign(
            tempData[currentItemIndex],
            {
              x: parseDate(nextItem, 'MM/YYYY'),
            },
          )
        }
      }

      return tempData
    }, [])

    return parsedData
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = { getPage, parseTable }
