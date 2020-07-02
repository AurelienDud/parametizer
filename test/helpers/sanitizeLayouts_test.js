import sanitizeLayouts from '../../src/helpers/sanitizeLayouts'

/**
 * Don't use Jest 'it.each' because that change the shape of parameters!
 */

const mockLayoutsInvalid = [
  1,
  [0],
  { 1: [0], 2: [0] },
  [['string'], ['string', 'string']]
]

const mockLayoutsValid = [
  [[0]],
  [[0], [0, 1], [0, 2, 3]]
]

describe('Test layouts sanitizer', () => {
  mockLayoutsInvalid.forEach(mock => {
    it('reject invalid layout', () => {
      const func = expect(sanitizeLayouts(mock))
      func.toBeNull()
    })
  })

  mockLayoutsValid.forEach(mock => {
    it('return valid layout as-is', () => {
      const func = expect(sanitizeLayouts(mock))
      func.not.toBeNull()
      func.not.toBeUndefined()
      func.toStrictEqual(expect.any(Array))
      func.toStrictEqual(mock)
    })
  })
})
