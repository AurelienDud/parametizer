import sanitizeParams from './helpers/sanitizeParams'
import sanitizeLayouts from './helpers/sanitizeLayouts'
import searchLayout from './helpers/searchLayout'
import buildReturn from './helpers/buildReturn'

const parametizer = (_params, _layouts) => {
  const params = sanitizeParams(_params)
  const layouts = sanitizeLayouts(_layouts)

  if (!params || !layouts) return false

  const layout = searchLayout(params.length, layouts)

  return buildReturn(params, layout)
}

export default parametizer