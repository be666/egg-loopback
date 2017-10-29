'use strict';
const lbApp = require('./lib/lbApp');
module.exports = app => {
  if (app.config.eggLoopback.app) lbApp(app);
};
