const assert = require('assert')
const sinon = require('sinon')
const puppeteer = require('puppeteer')

const puppeteerServices = require('./puppeteer')

describe('Test Puppeteer Service', function () {
  beforeEach(() => {
    sinon.stub(console, 'error')
    sinon.stub(console, 'log')
  })

  it('should return page when ready', async function () {
    const url = 'URL'
    sinon
      .stub(puppeteer, 'launch')
      .resolves({ newPage: sinon.stub().resolves({ goto: () => {} }) })

    const page = await puppeteerServices.getPage(url)

    assert.equal(!!page.goto, true)
  })

  it('should return parsed data', async function () {
    const url = 'URL'
    sinon.stub(puppeteer, 'launch').resolves({
      newPage: sinon.stub().resolves({
        goto: () => {},
        evaluate: sinon.stub().resolves({ data: [], colCount: 0 }),
      }),
    })

    const result = await puppeteerServices.parseTable(url)

    assert.equal(result.data.length, 0)
    assert.equal(result.colCount, 0)
  })

  afterEach(() => {
    sinon.restore()
  })
})
