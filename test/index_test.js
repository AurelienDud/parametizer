import parametizer from '../src/index'

/**
 * This test is same than the test /helpers/buildReturns
 * But this one can reject wrong data set in entry
 *
 * Don't use Jest 'it.each' because that change the shape of parameters!
 */

const mockLayouts = [
  [2],
  [4, 1, 2],
  [1, 3],
  [1, 0, 3],
  [0, 1, 2, 3]
]

const mockList = [
  {
    params: ['string1', 'string2', 'string3'],
    result: [undefined, 'string2', 'string3', undefined, 'string1']
  },
  {
    params: [null, 'string1'],
    result: [undefined, null, undefined, 'string1']
  },
  {
    params: [null, 'string1', null, null, null, null, null, 'string2'],
    result: [null, 'string1', null, null]
  }
]

describe('Test global', () => {
  mockList.forEach(mock => {
    it('a test of result build', () => {
      const func = expect(parametizer(mock.params, mockLayouts))
      func.toStrictEqual(mock.result)
    })
  })
})
