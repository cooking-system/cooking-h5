const path = require('path')
const fs = require('fs')
const { execSync } = require('child_process')

const execBase = (command) => {
  try {
    const result = execSync(command, {})
    if (result.toString()) {
      console.log('exec base: ', result.toString())
    }
    return true
  } catch (e) {
    console.log('exec error: ', e)
  }
  return false
}

console.log('build start')
execBase('npm run build')
console.log('build complete')

// 移动打包后的dist到指定路径
const moveAsserts = () => {
  const sourceDist = path.join(__dirname, './dist')
  const targetDist = path.join(__dirname, './app/public/dist')
  const tplTargetDist = path.join(__dirname, './app/view')

  if (!fs.existsSync(sourceDist)) {
    return console.log('sourceDist dir is not exists !')
  }
  if (fs.existsSync(targetDist)) {
    console.log('target dir is exists !')
    console.log(targetDist)
    execBase(`rm -rf ${targetDist}`)
  }
  execBase('mv -f ./dist ./app/public/dist')
  execBase(`mv -f ${targetDist}/index.tpl ${tplTargetDist}`)
}

moveAsserts()

