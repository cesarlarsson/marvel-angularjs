var gulp = require('gulp');
var serve = require('gulp-serve');
var  browserify = require('browserify');
var buffer     = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var sourceMaps = require('gulp-sourcemaps'); //create the sourcemaps file
var rename     = require('gulp-rename'); //Rename a file
var uglify = require('gulp-uglify'); //Uglify JS
var bulkify = require('bulkify'); //require files in a folder(s)
var concatCss = require('gulp-concat-css'); //concat css files
var del = require('del'); //Delete files on a folder 

var css =require('gulp-clean-css'); 

var config = {
    js: {
        src: './app/marvel-app.js',       // Entry point
        outputDir: './dist',  // Directory to save bundle to
        mapDir: './maps/',      // Subdirectory to save maps to
        outputFile: 'bundle.js', // Name to use for bundle
        outputFileMin: 'bundle.min.js' // Name to use for bundle
        
    },
};

gulp.task('serve', serve({
  root: ['.'],
  port: 8181,
}));

function bundle (bundler) {
    // Add options to add to "base" bundler passed as parameter
    bundler
      .bundle()                                                        // Start bundle
      .pipe(source(config.js.src))                        // Entry point
      .pipe(buffer())               // Convert to gulp pipeline                                
      .pipe(rename(config.js.outputFile))          // Rename output from 'main.js'
      .pipe(gulp.dest(config.js.outputDir)) 
      .pipe(sourceMaps.init())
       .pipe(uglify())   
       .pipe(rename(config.js.outputFileMin)) 
       
       .pipe(gulp.dest(config.js.outputDir))                                                                      //   to 'bundle.js'
      // Strip inline source maps
         
        .pipe(sourceMaps.write('./adasd'))
         
}

gulp.task('bundle', function () {
    var bundler = browserify(config.js.src).transform("browserify-ngannotate").transform("bulkify");
    bundle(bundler);  // Chain other options -- sourcemaps, rename, etc.
})

gulp.task('clean:styles', function () {
  return del([
    './dist/css/**/*',
  ]);
});

gulp.task("styles",["clean:styles"],function(){
        gulp.src("assets/css/*.css")
    
        .pipe(concatCss("bundle.css"))
        .pipe(css())
        .pipe(sourceMaps.init())
        .pipe(sourceMaps.write('./'))
        .pipe(gulp.dest('dist/css/'))
 
});


gulp.task("test",function(){
 gulp.src("dist/css/bundle.css")
    .pipe(sourceMaps.init())
    .pipe(sourceMaps.write("./"))
    .pipe(gulp.dest('dist/css/'));

});


gulp.task("testjs",function(){
 gulp.src("dist/bundle.min.js")
    .pipe(sourceMaps.init())
    .pipe(sourceMaps.write("./"))
    .pipe(gulp.dest('dist/'));

});