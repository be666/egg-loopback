'use strict';
const path = require('path');

module.exports = appInfo => {
  const config = {};
  config.keys = '123456';
  config.eggLoopback = {
    app: true,
    client: {
      dir: path.join(appInfo.baseDir, 'app/loopback'),
    },
  };
  return config;
};
