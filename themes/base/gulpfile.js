var gulp = require('gulp'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename'),
    compass = require('gulp-compass'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-htmlmin');

// Compile sass into CSS
gulp.task('style', function() {
    gulp
    .src('./source/scss/**/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: 'css',
      sass: 'source/scss'
    }))
    .pipe(gulp.dest('css'))
    .pipe(notify({ message: '<%= file.relative %> compiled.', wait: true }));
});

// Concatenate & Minify JS
gulp.task('script', function() {
    gulp
    .src(['./source/js/**/*.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('js'))
    .pipe(rename('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js'))
    .pipe(notify({ message: '<%= file.relative %> compiled.', wait: true }));
});

// Minify SS files
gulp.task('template', function() {
  return gulp.src('./source/templates/**/*.sss')
    .pipe(htmlmin({
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        minifyJS: true,
        minifyCSS: true,
        removeComments: true
    }))
    .pipe(rename(function(path) {
        path.extname = ".ss"
    }))
    .pipe(gulp.dest('templates'))
    .pipe(notify({ message: '<%= file.relative %> compiled.', wait: true }));
});

// Watch
gulp.task('watch', function() {
    // Watch .scss files
    gulp.watch('./source/scss/**/*.scss', ['style']);

    // Watch .js files
    gulp.watch('./source/js/**/*.js', ['script']);

    // Watch .ss files
    gulp.watch('./source/templates/**/*.ss', ['template']);
});

gulp.task('default', ['style', 'script', 'template', 'watch']);
