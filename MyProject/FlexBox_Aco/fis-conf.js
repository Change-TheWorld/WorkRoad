/**
 * @file vue 构建配置
 * @author 王宇
 * @date 2017-08-30
 * Copyright 2017 - BeiJing Changliao Technology Co.Ltd. All Rights Reserved
 */
var package = require('./package.json');
var mainVersion = package.version.replace(/\.\d+$/, '');

// 全局变量
fis.set('project.ignore', [ // 忽略的文件
  'package-lock.json',
  'package.json',
  'node_modules/**',
  'bower.json',
  'bower_components/**',
  'inc/**',
  '**/_*.*',
  '_output',
  'mock/**',
  'fis-conf.js',
  'sftp-config.json',
]);
fis.set('project.files', ['**.{css,less,html,php,js,png,jpg,gif,ico}']); // 处理的文件类型 
fis.set('project.ext', { less: 'css', sass: 'css' });
fis.set('livereload-iprule', debugAddress());

// 部署
var media = fis.project.currentMedia();
var fisDeploys = {
  develop: {
    receiver: 'http://175.25.18.68:9010/receiver?token=fgg06xzpjxg6dnmm7jora6qe4cgvlq0xd5hfkwbvjnno2bed',
    to: '/data/webdir/anchor.ifreetalk.com/templates/anchor_apply'
  },
};
if (fisDeploys[media]) {
  fis.media(media).match(/\.(js|css|less|png|jpg|gif|ico)$/i, { // CDN
    useHash: true,
    domain: '//source.ifreetalk.com/page/activity/activity',
    deploy: fis.plugin('http-push2', {
      receiver: 'http://10.33.72.136:8099/index.php?i=source_web_page&t=WTCUAqBq2UlE4NRzYNlV7BUxXhPV8V2amAXxGDdLfEo9aIJ2',
      to: '/data/webdir/source/page/activity/activity',
      cacheDir: __dirname + '/.cache'
    })
  }).match(/([a-zA-Z0-9_-]+)\/index.html$/, { // Page
    release: '$1.html',
    deploy: fis.plugin('http-push2', {
      receiver: fisDeploys[media].receiver,
      to: fisDeploys[media].to,
      cacheDir: __dirname + '/.cache'
    })
  }).match(/([^\/\\]+\.(php|html|htm|js|css))$/i, {
    parser: fis.plugin('jdists', {
      trigger: ['release', media].join(),
      remove: 'remove, debug'
    })
  });
}

// 预编译
fis.match('{components,public/css}/{**.vue:less,**.less,**.css}', {
  rExt: 'css',
  parser: [fis.plugin('jdists'), fis.plugin('less')],
  optimizer: fis.plugin('clean-css'),
  postprocessor: fis.plugin('autoprefixer'),
}).match('components/**.vue', {
  rExt: 'js',
  isMod: true,
  useSameNameRequire: true,
  optimizer: fis.plugin('uglify-js'),
  parser: [fis.plugin('jdists'), fis.plugin('vue-component', { runtimeOnly: true })],
});

// 模块化支持插件
fis.hook('commonjs', {
  extList: ['.js', '.vue'],
  umd2commonjs: true,
  ignoreDependencies: []
});

// 打包
fis.match('::package', {
  postpackager: fis.plugin('loader'),
}).match('(**)/components/**.vue', {
  packTo: '$1/js/index.js',
  packOrder: 20
}).match('(**)/components/main.js', {
  packTo: '$1/js/index.js',
  packOrder: 15
}).match('(**)/components/**.css', {
  packTo: '$1/css/index.css',
  packOrder: 10
});

// debug 调试
if (!(/-w?L/.test(process.argv)) && fis.project.currentMedia() === 'debug') { // 存在监听
  fis.once('release:end', function () { openUrl('http://%s:%s/index.php') });
}

//----------------------------------
// @see open@0.0.4
var exec = require('child_process').exec;
var path = require('path');

/**
 * open a file or uri using the default application for the file type.
 *
 * @return {ChildProcess} - the child process object.
 * @param {string} target - the file/uri to open.
 * @param {string} appName - (optional) the application to be used to open the
 *      file (for example, "chrome", "firefox")
 * @param {function(Error)} callback - called with null on success, or
 *      an error object that contains a property 'code' with the exit
 *      code of the process.
 */

function open(target, appName, callback) {
  function escape(s) {
    return s.replace(/"/g, '\\\"');
  }

  var opener;

  if (typeof (appName) === 'function') {
    callback = appName;
    appName = null;
  }

  switch (process.platform) {
    case 'darwin':
      if (appName) {
        opener = 'open -a "' + escape(appName) + '"';
      } else {
        opener = 'open';
      }
      break;
    case 'win32':
      // if the first parameter to start is quoted, it uses that as the title
      // so we pass a blank title so we can quote the file we are opening
      if (appName) {
        opener = 'start "" "' + escape(appName) + '"';
      } else {
        opener = 'start ""';
      }
      break;
    default:
      if (appName) {
        opener = escape(appName);
      }
      break;
  }

  return exec(opener + ' "' + escape(target) + '"', callback);
}

//-----------------------

var util = require('util');

function openUrl() {
  String(package.scripts.debug).replace(/-p\s*(\d+)\s*&&/, function (all, port) {
    setTimeout(function () {
      open(util.format('http://%s:%s/ABigProject/index.php', debugAddress(), port));
    });
  });
}

function debugAddress() {
  var net = require('os').networkInterfaces();
  var result;
  Object.keys(net).some(function (key) {
    return net[key].some(function (item) {
      if (!item.internal && item.family === 'IPv4' && /192.168/.test(item.address)) {
        result = item.address;
        return true;
      }
    });
  });
  return result;
}