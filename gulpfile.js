var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    minify = require('gulp-minify'),
    sourcemaps = require('gulp-sourcemaps'),
    pug = require('gulp-pug'),
    livereload = require('gulp-livereload');

gulp.task('html', function(){
    return gulp.src('stage/html/*.pug')
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
});
// Css Task

gulp.task('css', function(){
    return gulp.src(['stage/css/**/*.css', 'stage/css/**/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed',}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(concat('main.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload())
});
// JS Task

gulp.task('js', function(){
    return gulp.src('stage/js/*.js')
    .pipe(concat('main.js'))
    .pipe(minify())
    .pipe(gulp.dest('dist/js'))
    .pipe(livereload())
});
// Watch Task

gulp.task('watch', function(){
    require('./server.js');
    livereload.listen();
    gulp.watch("stage/html/**/*.pug", gulp.series('html'));
    gulp.watch(["stage/css/**/*.css", "stage/css/**/*.scss"], gulp.series('css'));
    gulp.watch("stage/js/**/*.js", gulp.series('js'));
});