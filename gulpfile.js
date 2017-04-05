'use strict';

var browserify = require('browserify')
   , source = require('vinyl-source-stream')
  , gulp = require('gulp');

/*var gulpPlugins = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});*/

// Define file path variables
var paths = {
  root: 'app/',      // App root path
  src:  'app/js/',   // Source path
  dist: 'dist/', // Distribution path
  test: 'test/',     // Test path
};

gulp.task('browserify', /*['lint', 'unit'],*/ function () {
  return browserify(paths.root+ 'marvel-app.js', {debug: true})
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest(paths.dist))
});