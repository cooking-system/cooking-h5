export const nameWrapper = (name) => {
  return `cooking-${name}`
}

export const getCommonProps = () => {
  // todo 考虑把service和view公共的东西统一起来
  const props = require('../packages/common/commonProps.json')
  return props
}

export const getProps = (config) => {
  const { injectCommonProps, properties } = config
  let result = { ...properties }
  if (injectCommonProps) {
    result = {
      ...properties,
      ...getCommonProps()
    }
  }
  return result
}
