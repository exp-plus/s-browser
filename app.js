'use strict';

class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  async didReady() {
    const ctx = await this.app.createAnonymousContext();
    await ctx.service.browser.launch();
  }
}

module.exports = AppBootHook;
