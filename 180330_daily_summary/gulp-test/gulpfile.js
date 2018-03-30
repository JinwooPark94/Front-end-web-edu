var gulp = require('gulp');
var pump = require('pump');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cleanCss = require('gulp-clean-css');
var concatCss = require('gulp-concat-css');

var publicPath = {
  src: './public/src/',
  dest: './public/dist/'
};

//hello라는 gulp task를 등록
gulp.task("hello", function () {
  return console.log("hello");
});

gulp.task("gulpworld", ["hello"], function () {
  return console.log("hello gulpworld");
});

gulp.task("uglify", function (){
  pump([
    gulp.src(publicPath.src + 'stackQueue.min.js'),
    uglify(),
    gulp.dest(publicPath.dest)
  ])
});

gulp.task("concat", function () {
  pump([
    gulp.src([publicPath.src + 'Queue.js', publicPath.src + 'Stack.js']),
    concat('stackQueue.min.js'),
    gulp.dest(publicPath.src)
  ]);
});

gulp.task("concatCss", function () {
  pump([
    gulp.src(publicPath.src + '*.css'),
    concatCss('style.min.css'),
    gulp.dest(publicPath.src)
  ])
});

gulp.task("cleanCss", function () {
  pump([
    gulp.src(publicPath.src + '*.css'),
    cleanCss({compatibility: 'ie8'}),
    gulp.dest(publicPath.dest)
  ])
});

gulp.task("watch", function(){
  gulp.watch("./public/src/*.js", ["uglify"]);
  gulp.watch("./public/src/*.css", ["cleanCss"]);
});

gulp.task("default", ["concat", "uglify", "concatCss", "cleanCss"]);