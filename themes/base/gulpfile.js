/*-------------------------------------------------------------------
    Required plugins
-------------------------------------------------------------------*/
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename'),
    compass = require('gulp-compass'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-htmlmin');

/*-------------------------------------------------------------------
    Configuration
-------------------------------------------------------------------*/
path = {
    styles: "./source/scss/**/*.scss",
    scripts: "./source/js/**/*.js",
    templates: "./source/templates/**/*.sss"
}

/*-------------------------------------------------------------------
    Tasks
-------------------------------------------------------------------*/
// Compile sass into CSS
gulp.task('style', function() {
    gulp.src(path.styles)
    .pipe(compass({
        config_file: './config.rb',
        css: 'css',
        sass: 'source/scss'
    }))
    .pipe(gulp.dest('css'))
    .pipe(notify({ message: 'Compiled <%= file.relative %> style.', wait: true }));
});

// Concatenate & Minify JS
gulp.task('script', function() {
    gulp.src(path.scripts)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('js'))
    .pipe(rename('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js'))
    .pipe(notify({ message: 'Compiled <%= file.relative %> script.', wait: true }));
});

// Minify SS files
gulp.task('template', function() {
    gulp.src(path.templates)
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
    .pipe(notify({ message: 'Compiled <%= file.relative %> template.', wait: true }));
});

// Watch
gulp.task('watch', function() {
    // Watch .scss files
    gulp.watch(path.styles, ['style']);

    // Watch .js files
    gulp.watch(path.scripts, ['script']);

    // Watch .sss files
    gulp.watch(path.templates, ['template']);
});

gulp.task('default', ['style', 'script', 'template', 'watch']);
