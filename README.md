# egg-loopback

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-loopback.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-loopback
[travis-image]: https://img.shields.io/travis/eggjs/egg-loopback.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-loopback
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-loopback.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-loopback?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-loopback.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-loopback
[snyk-image]: https://snyk.io/test/npm/egg-loopback/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-loopback
[download-image]: https://img.shields.io/npm/dm/egg-loopback.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-loopback

<!--
Description here.
-->

## Install

```bash
$ npm i egg-loopback --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.loopback = {
  enable: true,
  package: 'egg-loopback',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.eggLoopback = {
  app: true,
  client: {
    dir: path.join(appInfo.baseDir, 'app/loopback'),
  }
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

[loopback-test](https://github.com/bqxu/egg-loopback/test/fixtures/apps/loopback-test)

```js
// {app_root}/app/controller
module.exports = app => {

  class DemoController extends app.Controller {
    * index() {

      const { Test } = this.app.eggLoopback.models;

      this.ctx.body = yield Test.find();
    }

    * create() {

      const { name } = this.ctx.query;
      const { Test } = this.app.eggLoopback.models;

      yield Test.create({ name });
      this.ctx.body = yield Test.find();
    }

  }

  return DemoController;

};


```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
