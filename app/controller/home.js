'use strict'

const Controller = require('egg').Controller
const path = require('path')
const fs = require('fs')
class HomeController extends Controller {
  async index() {
    const { ctx } = this
    ctx.body = 'hi, egg'
  }
  async page() {
    const { ctx } = this
    const data = { name: 'egg' }

    // render a template, path relate to `app/view`
    await ctx.render('index.tpl', data)
  }
  async components() {
    const { ctx } = this
    const targetPath = path.join(__dirname, '../../components.json')
    const isExist = fs.existsSync(targetPath)
    if (isExist) {
      const data = require(targetPath)
      ctx.body = data
    } else {
      ctx.body = []
    }
  }
}

module.exports = HomeController
