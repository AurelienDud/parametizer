import searchLayout from '../../src/helpers/searchLayout'

/**
 * Always retrun an array
 *
 * Don't use Jest 'it.each' because that change the shape of parameters!
 */

const mockLayouts = [
  {
    // basic
    layouts: [
      [0],
      [0, 1],
      [0, 1, 2],
      [0, 1, 2, 3]
    ],
    count: 2,
    soluce: [0, 1]
  },
  {
    // in mess
    layouts: [
      [0, 1, 2],
      [0],
      [0, 1, 2, 3],
      [3, 0]
    ],
    count: 2,
    soluce: [3, 0]
  },
  {
    // with duplicates
    layouts: [
      [0],
      [0, 1, 2],
      [0, 1],
      [1],
      [1, 2, 3],
      [0, 1, 2, 3]
    ],
    count: 3,
    soluce: [0, 1, 2]
  },
  {
    // count (of params) is bigger than the biggest layout
    // return the bigger layout
    layouts: [
      [0],
      [0, 1, 2, 3],
      [0, 1, 2],
      [1, 3]
    ],
    count: 8,
    soluce: [0, 1, 2, 3]
  }
]

describe('Test search best layout', () => {
  mockLayouts.forEach(mock => {
    it('search Layout', () => {
      const func = expect(searchLayout(mock.count, mock.layouts))
      func.toStrictEqual(expect.any(Array))
      func.toStrictEqual(mock.soluce)
    })
  })
})
