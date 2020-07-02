/**
 * @param {array} params
 * @param {array} layout
 * @return {array}
 */
export default function (params, layout) {
  const returnedItem = Math.max(...layout)
  var toReturn = []
  // create an array with the count of item and undefined values
  for (var x = 0; x <= returnedItem; x++) {
    toReturn.push(undefined)
  }
  // set params in places defined by the layout
  var j = 0
  for (var i = 0, len = layout.length; i < len; i++) {
    toReturn[layout[i]] = params[j]
    j += 1
  }
  return toReturn
}
