'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async screenshot() {
    const { url } = this.ctx.query;
    if (!url) {
      this.ctx.body = '缺少query字段：url';
      return;
    }
    const imageBuffer = await this.ctx.service.browser.screenshot(url, this.ctx.query);
    this.ctx.body = imageBuffer;
  }
  async pdf() {
    const { url } = this.ctx.query;
    if (!url) {
      this.ctx.body = '缺少query字段：url';
      return;
    }
    const imageBuffer = await this.ctx.service.browser.pdf(url, this.ctx.query);
    this.ctx.body = imageBuffer;
  }
}

module.exports = HomeController;
