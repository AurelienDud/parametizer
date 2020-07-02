/**
 * @param {any} params
 * @return {array|undefined}
 */
export default function (params) {
  // is an array
  if (Array.isArray(params)) return params
  // create an array
  const arr = []
  arr.push(params)
  return arr
}
