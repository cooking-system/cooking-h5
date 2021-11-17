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
    const { id } = ctx.request.query
    const result = await ctx.curl('http://127.0.0.1:7777/page-config/get', {
      method: 'get',
      dataType: 'json',
      data: { id }
    })
    console.log(id)
    const data = (result.data ? result.data.data : {}) || {}
    const config = {
      ssrConfig: encodeURIComponent(JSON.stringify({
        pageConfig: data
      }))
    }
    // render a template, path relate to `app/view`
    await ctx.render('index.tpl', config)
  }
  async components() {
    const { ctx } = this
    const targetPath = path.join(__dirname, '../../components.json')
    const isExist = fs.existsSync(targetPath)
    if (isExist) {
      const data = require(targetPath)
      ctx.setSuccess(data)
    } else {
      ctx.setSuccess([])
    }
  }
}

module.exports = HomeController
