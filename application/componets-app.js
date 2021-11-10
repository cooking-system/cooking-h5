/**
 * 用来服务器初始化时，读取目标目录下的packages，来生成components.json在根目录下
 */

const fs = require('fs')
const path = require('path')

const baseDir = path.join(__dirname, '..')

const readDirList = () => {
  const dirPath = path.join(baseDir, './src/packages')
  try {
    const result = fs.readdirSync(dirPath)
    return result
  } catch (e) {
    console.log(e)
  }
  return []
}

const getCommonProps = () => {
  const targetPath = path.join(baseDir, './src/packages/common/commonProps.json')
  const data = require(targetPath)
  return data
}

const readFile = (fileDir) => {
  const fileName = path.join(baseDir, './src/packages/', fileDir, '/config.json')
  const pref = 'cooking-'
  const name = pref + fileDir

  try {
    const data = require(fileName)
    let obj = {}
    const { injectCommonProps, properties, label, category } = data
    if (injectCommonProps) {
      obj = { ...getCommonProps() }
    }
    return {
      name,
      category,
      label,
      properties: {
        ...obj,
        ...properties
      }
    }
  } catch (e) {
    console.log('read file error', e)
  }
}

const writeToPlace = (data) => {
  const target = path.join(baseDir, './components.json')
  fs.writeFileSync(target, JSON.stringify(data, null, 2), {
    encoding: 'utf-8'
  })
}

module.exports = (app) => {
  const excludeDir = ['common']
  const list = readDirList().filter(key => {
    return excludeDir.includes(key) === false
  })
  const dataList = list.map(e => {
    return readFile(e)
  })
  writeToPlace(dataList)
}
