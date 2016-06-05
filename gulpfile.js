var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var autoprefixer = require('gulp-autoprefixer');
// var sourcemaps = require('gulp-sourcemaps');
// var cleanCss = require('gulp-clean-css');
// var uglify = require('gulp-uglify');
var mustache = require('gulp-mustache-plus');
var path = require('path');
var data = require('gulp-data');
var fs = require('fs');

// HTML
gulp.task('mustache', function() {
  gulp.src('./source/templates/*.mustache')
    .pipe(mustache({
      data: require('./source/data.json').data
      // data: fs.readFile('./source/data.json', 'utf8')
    },
    {},
    {
      head: './source/partials/head.mustache',
      'list-item': './source/partials/list-item.mustache',
      icon: './source/partials/icon.mustache'
    }))
    .pipe(gulp.dest('./'));
})

// SCSS
gulp.task('styles', function() {
  // gulp.src('scss/**/*.scss')
  gulp.src('./source/scss/style.scss')
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./'));
});

// autoprefixer and sourcemaps
// gulp.task('build-css', function() {
//   gulp.src('css/style.css')
//     .pipe(sourcemaps.init())
//     .pipe(cleanCss({compatibility: 'ie8'}))
//     .pipe(cleanCss({debug: true}, function(details) {
//       console.log(details.name + ' before: ' + details.stats.originalSize);
//       console.log(details.name + ' afters: ' + details.stats.minifiedSize);
//     }))
//     .pipe(sourcemaps.write('.'))
//     .pipe(gulp.dest('./build/'))
// })

// gulp.task('build-js', function() {
//   gulp.src('js/**/*.js')
//     .pipe(uglify())
//     .pipe(gulp.dest('./build'));
// })

// build
// gulp.task('build', ['build-css', 'build-js']);

// Server 
gulp.task('server', function() {
  connect.server({ port: 3001, livereload: true });
});

// watchers
gulp.task('watch-mustache', function() {
  gulp.watch(['./source/**/*.mustache', './source/*.json'], ['mustache'])
})
gulp.task('watch-scss', function() {
  gulp.watch('./source/scss/**/*.scss', ['styles']);
});

gulp.task('default', ['server', 'watch-scss', 'watch-mustache']);

