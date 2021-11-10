const path = require('path')
const fs = require('fs')
const glob = require('glob')

module.exports = (app) => {
  app.messenger.once('egg-ready', params => {
    const appFiles = glob.sync(path.resolve(__dirname, `./application/**-app.js`))
    for (const __file of appFiles) {
      if (fs.existsSync(__file)) {
        require(__file)(app, params)
      }
    }
  })
}
