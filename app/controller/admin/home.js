'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg' + ctx.helper.getMd5Data('mss2sis');
  }
}

module.exports = HomeController;
