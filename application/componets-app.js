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

// eslint-disable-next-line no-unused-vars
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
    const obj = {}
    const commonProps = getCommonProps()
    const { injectCommonProps, properties, label, category, ...rest } = data

    // 考虑的组件本身已经具有一定样式，是否提供给用户高度自定义的功能需要进一步的讨论，否则只会平白无故增加开发的难度
    if (injectCommonProps === 'all') {
      obj = { ...commonProps }
    } else if (Array.isArray(injectCommonProps) && injectCommonProps.length) {
      for (let i = 0; i < injectCommonProps.length; i++) {
        const key = injectCommonProps[i]
        obj[key] = commonProps[key]
      }
    }
    return {
      name,
      category,
      label,
      ...rest,
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
