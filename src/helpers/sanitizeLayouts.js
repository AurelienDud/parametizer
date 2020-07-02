/**
 * @param {any} params
 * @return {array|undefined}
 */
export default function (layouts) {
  // no params
  if (!layouts || layouts === undefined) return null

  // not an array
  if (!Array.isArray(layouts)) return null

  // children are arrays
  // children content is number
  let isValid = true
  let i = 0
  while (isValid && i < layouts.length) {
    const layout = layouts[i]
    if (!Array.isArray(layout)) {
      isValid = false
      break
    }
    let j = 0
    while (isValid && j < layout.length) {
      const item = layout[j]
      if (!(typeof (item) === 'number')) {
        isValid = false
        break
      }
      j += 1
    }
    i += 1
  }

  if (!isValid) return null

  return layouts
}
