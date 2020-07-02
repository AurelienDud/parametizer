import buildReturn from '../../src/helpers/buildReturn'

/**
 *
 * Don't use Jest 'it.each' because that change the shape of parameters!
 */

// args and layouts lenght are always same
// result length fit with the max number in layout + 1 (because array start to 0)
const mockParams = ['tom', 'julia', 'maria']
const mockLayouts = [2, 3, 5]
const exceptedResult = [undefined, undefined, 'tom', 'julia', undefined, 'maria']

describe('Test params sanitizer', () => {
  it('a test of result build', () => {
    const func = expect(buildReturn(mockParams, mockLayouts))
    func.toStrictEqual(expect.any(Array))
    func.toStrictEqual(exceptedResult)
  })
})
