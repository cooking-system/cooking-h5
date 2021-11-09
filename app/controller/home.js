'use strict'

const Controller = require('egg').Controller

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
}

module.exports = HomeController
