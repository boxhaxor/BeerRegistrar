var gulp = require('gulp');
var ts = require('gulp-typescript');
var runSequence = require('run-sequence');
var tsProject = ts.createProject({
  declaration: true,
  experimentalDecorators : true,
  module: 'system',
  target: 'ES5',
  moduleResolution: 'node',
  emitDecoratorMetadata: true,
  removeComments: false,
  noImplicitAny: false
});
var scssLocation = './style/**/*.scss';
var cssLocation ='./style/**/*.css';
var codeLocations = ['app/**/*.ts', '**/*.html', scssLocation];
var deployLocation = './deploy';
var del = require('del');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');

gulp.task('default', function(callback) {
  // place code for your default task here
 runSequence(
    'clean',
    'typescript',
    'sass',
    function (error) {
      if (error) {
        console.log(error.message);
      } else {
        console.log('default FINISHED SUCCESSFULLY');
      }
      callback(error);
    });
});
 
gulp.task('sass', function () {
  return gulp.src(scssLocation)
    .pipe(sass(
      //{outputStyle: 'compressed'}
    ).on('error', sass.logError))
    .pipe(gulp.src(cssLocation))
    .pipe(concat('/style.css')) 
    //.pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(deployLocation));
});
 

gulp.task('typescript', function() {
  console.log('Compiling typescript');
  return gulp.src(codeLocations)
   .pipe(ts(tsProject)).js
   //.pipe(uglify())
   .pipe(gulp.dest(deployLocation))
});

gulp.task('watch', ['default'], function() {
    gulp.watch(codeLocations, ['default']);
});


gulp.task('clean', function () {
  return del([
    deployLocation
  ]);
});