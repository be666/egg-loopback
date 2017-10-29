'use strict';
const loopback = require('loopback');
const boot = require('loopback-boot');

module.exports = app => {
  app.addSingleton('eggLoopback', createLoopbackApp);
};

function createLoopbackApp(config, app) {
  const lbApp = loopback();

  app.beforeStart(function* () {
    boot(lbApp, config.dir, function(err) {
      if (err) {
        app.coreLogger.error(err);
        return;
      }

      app.coreLogger.info('[egg-loopback] status OK');
    });
  });

  return lbApp;

}
