/**
 * @param {number} count
 * @param {array} layouts
 * @return {number}
 */
export default function (count, layouts) {
  var i = 0
  // case where count is bigger than the biggest layout
  // return the bigger layout and some params will be forgotten
  const orderedLayouts = layouts.sort(function (a, b) {
    return b.length - a.length
  })
  if (count >= orderedLayouts[0].length) {
    return orderedLayouts[0]
  }
  // there is possibility that fit
  while (i < layouts.length) {
    if (layouts[i].length === count) {
      return layouts[i]
    }
    i += 1
  }
}
