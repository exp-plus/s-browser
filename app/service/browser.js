'use strict';

const Service = require('egg').Service;
const puppeteer = require('puppeteer');
let browser;
class BrowserService extends Service {


  async launch() {
    browser = await puppeteer.launch({
      args: [
      // Required for Docker version of Puppeteer
        '--no-sandbox',
        '--disable-setuid-sandbox',
        /*
         * This will write shared memory files into /tmp instead of /dev/shm,
         * because Docker’s default for /dev/shm is 64MB
         */
        '--disable-dev-shm-usage',
      ],
    });
    const browserVersion = await browser.version();
    console.log('[Puppetter] version ' + browserVersion);
  }

  async screenshot(url, config) {
    const page = await browser.newPage();
    await page.goto(url);
    const imageBuffer = await page.screenshot({ ...config });
    await page.close();
    return imageBuffer;
  }
  async pdf(url, config) {
    const page = await browser.newPage();
    await page.goto(url);
    const imageBuffer = await page.pdf({ ...config });
    await page.close();
    return imageBuffer;
  }
}

module.exports = BrowserService;
