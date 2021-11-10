
const packages = require.context('@/packages', true, /index.vue$/)
const components = {}

packages.keys().forEach(key => {
  components[key] = packages(key).default
})

export default function install() {
  const result = {}

  Object.keys(components).forEach(key => {
    const item = components[key]
    const { name } = item
    result[name] = item
  })
  console.log(result)
  return result
}
