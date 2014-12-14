'use strict';
// generated on 2014-11-07 using generator-gulp-webapp 0.1.0

var gulp = require('gulp');

// load plugins
var $ = require('gulp-load-plugins')();

gulp.task('connect', function () {
  var connect = require('connect');
  var app = connect()
  .use(require('connect-livereload')({ port: 35729 }))
  .use(connect.static('.'))
  .use(connect.directory('.'));

  require('http').createServer(app)
  .listen(9000)
  .on('listening', function () {
    console.log('Started connect web server on http://localhost:9000');
  });
});

gulp.task('serve', ['connect'], function () {
  require('opn')('http://localhost:9000');
});

gulp.task('watch', ['connect', 'serve'], function () {
  var server = $.livereload();

  // watch for changes
  gulp.watch([
    '*.html',
    'css/*.css',
    'js/*.js'
  ]).on('change', function (file) {
    server.changed(file.path);
  });
});