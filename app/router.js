'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/s-browser/screenshot', controller.home.screenshot);
  router.get('/s-browser/pdf', controller.home.pdf);
};
