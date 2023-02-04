const assert = require('assert')
const sinon = require('sinon')

const graphServices = require('./graph')

describe('Test Graph Service', function () {
  describe('Test drawBarGraph()', function () {
    it('should return svg string', function () {
      const testString = 'svg'
      const mockData = 'mock'
      
      sinon.stub(graphServices, 'drawBarGraph').returns(testString)

      const result = graphServices.drawBarGraph(mockData)

      assert.equal(result, testString)
    })
  })
})
