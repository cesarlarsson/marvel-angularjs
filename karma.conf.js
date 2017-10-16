// Karma configuration
// Generated on Sun Oct 25 2015 12:32:31 GMT+0100 (CET)

module.exports = function(config) {
    config.set({
  
      // base path that will be used to resolve all patterns (eg. files, exclude)
      basePath: '',
  
  
      // frameworks to use
      // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
      frameworks: ['jasmine','browserify'],      
      plugins: [
        'karma-phantomjs-launcher',
        'karma-chrome-launcher',
        'karma-jasmine',
        'karma-mocha-reporter',
        'karma-browserify',
        'karma-coverage'
      ],
  
  
      // list of files / patterns to load in the browser
      files: [
         './node_modules/angular/angular.js',
        './node_modules/angular-ui-router/release/angular-ui-router.js',
        './node_modules/angular-mocks/angular-mocks.js', 
        './app/common/models/superheroes-model.js',
        './app/common/services/superheroes-path.js',
        './app/directory/list/list.js',
        './app/directory/list/pagination/pagination.js',
        './app/directory/superhero/superhero.js',
        './app/directory/superhero/superhero.test.js',
        './app/common/models/superheroes-model.test.js',
        './app/directory/list/list.test.js'
        
      ],
  
  
      // list of files to exclude
      exclude: [
      ],
  
      // preprocess matching files before serving them to the browser
      // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
      preprocessors: {
        './app/directory/list/list.js':['browserify'],
 
      },
  
  
      // test results reporter to use
      // possible values: 'dots', 'progress'
      // available reporters: https://npmjs.org/browse/keyword/karma-reporter
      reporters: ['mocha','progress','coverage'],
      // reporter options
      mochaReporter: {
        colors: {
          success: 'green',
          info: 'bgGreen',
          warning: 'cyan',
          error: 'bgRed'
        },
        symbols: {
          success: '+',
          info: '#',
          warning: '!',
          error: 'x'
        }
      },
      coverageReporter: {
          type: 'html',
          dir:'converage/'
  
      },
      // web server port
      port: 9876,
  
  
      // enable / disable colors in the output (reporters and logs)
      colors: true,
  
  
      // level of logging
      // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
      logLevel: config.LOG_INFO,
      browserify:{
                debug: true,
                extensions: ['.js'],
/*                 transform: [
                    ['browserify-ng-html2js', {
                        extension: 'html', // optionally specify what file types to look for
                        requireAngular: false // (default: false) optionally include `var angular = require('angular');`
                        // Supported in Angular 1.3.14 and above if you bundle angular with browserify
                    }]
                ] */
             },
        
  
      // enable / disable watching file and executing tests whenever any file changes
      autoWatch: true,
  
  
      // start these browsers
      // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
      //browsers: ['PhantomJS'],
      browsers: ['Chrome'],
  
  
      // Continuous Integration mode
      // if true, Karma captures browsers, runs the tests and exits
      singleRun: false,
  
      // Concurrency level
      // how many browser should be started simultanous
      concurrency: Infinity
    });
  };
  