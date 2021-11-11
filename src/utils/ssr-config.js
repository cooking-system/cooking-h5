export const getConfig = () => {
  const val = window.ssrConfig
  if (val && typeof val === 'string' && val !== '{{ ssrConfig }}') {
    return JSON.parse(decodeURIComponent(val))
  }
  if (val && typeof val === 'object') {
    return val
  }
  return {}
}
