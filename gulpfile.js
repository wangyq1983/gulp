/**
 * Created by tbp on 2017/6/8.
 */
var gulp = require('gulp');
// var plugins = require('gulp-load-plugins')();
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var uglify = require("gulp-uglify");
var minifyCss = require("gulp-minify-css");
var rename = require('gulp-rename');
var minifyHtml = require("gulp-minify-html");
var imagemin = require('gulp-imagemin');

gulp.task('task-wyq', function () {
    console.log('helloworld');
});
gulp.task('rename', function () {
    gulp.src('app/js/tree.js')
        .pipe(uglify())  //压缩
        .pipe(rename('tree.min.js')) //会将jquery.js重命名为jquery.min.js
        .pipe(gulp.dest('app/js/'));
    //关于gulp-rename的更多强大的用法请参考https://www.npmjs.com/package/gulp-rename
});
gulp.task('sass', function () {
    return gulp.src('app/scss/style.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });
});
gulp.task('watch', ['browserSync', 'sass'], function (){
    gulp.watch('app/scss/*.scss', 'sass');
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('app/*.html', browserSync.reload);
     gulp.watch('app/js/*.js', browserSync.reload);
});
gulp.task('minify-js', function () {
    gulp.src('app/js/*.js') // 要压缩的js文件
        .pipe(uglify())  //使用uglify进行压缩,更多配置请参考：
        .pipe(gulp.dest('dist/js')); //压缩后的路径
});
gulp.task('minify-css', function () {
    gulp.src('app/css/*.css') // 要压缩的css文件
        .pipe(minifyCss()) //压缩css
        .pipe(gulp.dest('dist/css'));
});
gulp.task('minify-html', function () {
    gulp.src('app/*.html') // 要压缩的html文件
        .pipe(minifyHtml()) //压缩
        .pipe(gulp.dest('dist/html'));
});
gulp.task('images',function () {
    gulp.src('app/image/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
})


