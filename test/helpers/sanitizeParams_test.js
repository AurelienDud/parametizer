import sanitizeParams from '../../src/helpers/sanitizeParams'

/**
 * Always retrun an array
 *
 * Don't use Jest 'it.each' because that change the shape of parameters!
 */

const mockParamsToTransform = [
  'string',
  1,
  { value1: [0], value2: [1] },
  () => ('value')
]

const mockArrayParams = [
  ['string'],
  [0],
  [1, 'string', { obj: 'string' }]
]

describe('Test params sanitizer', () => {
  mockParamsToTransform.forEach(mock => {
    it('transform param as an array', () => {
      const func = expect(sanitizeParams(mock))
      func.toStrictEqual(expect.any(Array))
    })
  })

  mockArrayParams.forEach(mock => {
    it('return param as-is', () => {
      const func = expect(sanitizeParams(mock))
      func.toStrictEqual(expect.any(Array))
      func.toStrictEqual(mock)
    })
  })
})
