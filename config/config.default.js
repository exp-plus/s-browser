/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   *
   */
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1569030914493_6510';

  // add your middleware config here
  config.middleware = [];
  config.browser = {
    store_dir: appInfo.baseDir + '/tmp',
  };

  config.api = {
    API_PREFIX: '/b-treasure',
  };

  // 应用运行在 3000 端口
  config.cluster = {
    listen: {
      port: 3000,
    },
  };
  return {
    ...config,
  };
};
