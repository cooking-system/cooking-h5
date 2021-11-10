const path = require('path')
const fs = require('fs')

const readDirList = () => {
  const dirPath = path.join(__dirname, './src/packages')
  try {
    const result = fs.readdirSync(dirPath)
    return result
  } catch (e) {
    console.log(e)
  }
  return []
}

const readFile = (fileDir) => {
  const fileName = path.join(__dirname, './src/packages/', fileDir, '/properties.js')
  try {
    (async() => {
      const data = await import(fileName)
      console.log(data)
    })()
    // const data = require(fileName)
    // const data = fs.readFileSync(fileName, 'utf-8')
    console.log(data)
  } catch (e) {
    console.log('read file error', e)
  }
}

const list = readDirList()
readFile(list[0])

module.exports = (app) => {
}
