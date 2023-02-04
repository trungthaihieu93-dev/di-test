const assert = require('assert')
const sinon = require('sinon')

const { checkDate, parseDate } = require('./datetime')

describe('Test Datetime Utils', function () {
  describe('Test checkDate()', function () {
    it('should return true when date is valid', function () {
      const testDate = '09 Mar 1993'
      const result = checkDate(testDate)

      assert.equal(result, true)
    })

    it('should return false when date is invalid', function () {
      const testDate = 'abcxyz'
      const result = checkDate(testDate)

      assert.equal(result, false)
    })
  })

  describe('Test parseDate()', function () {
    it('should return right date', function () {
      const testDate = '09 Mar 1993'
      const result = parseDate(testDate, 'DD/MM/YYYY')

      assert.equal(result, '09/03/1993')
    })
  })
})
