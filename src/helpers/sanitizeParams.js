/**
 * @param {any} params
 * @return {array|undefined}
 */
export default function (params) {
  if (Array.isArray(params)) return params
  return [...params]
}
