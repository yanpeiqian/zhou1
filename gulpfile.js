var gulp = require('gulp');
var webServer = require('gulp-webserver');
var minHtml = require('gulp-htmlmin');
var minCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');

// 压缩html文件
gulp.task("minHtml",function(){
    gulp.src('./index.html')
        .pipe(minHtml({
            removeComments:true,    // 清除html注释
            collapseWhitespace:true,    // 压缩html
            collapseBooleanAttributes:true, // 省略布尔值属性
            removeStyleLinkTypeAttribute:true, // 删除style和link
            removeScriptTypeAttributes:true,    //删除script的type
            removeEmptyAttributes:true, // 删除所有空格
            minifyJs:true, // 压缩页面js
            minifyCss:true // 压缩页面css
        }))
        .pipe(gulp.dest('dist'))
});

// 压缩css文件
gulp.task('minCss',function(){
    gulp.src('./css/style.css')
        .pipe(minCss())
        .pipe(gulp.dest('dist/css'))
});

// 压缩js文件
gulp.task('minJs',function(){
    gulp.src('./script.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});

//启动服务
gulp.task('httpServer',function(){
    gulp.src('./')
        .pipe(webServer({
            port:9090,
            host:'localhost',
            liveload:true
        }))
});
gulp.task('default',['minHtml','minCss','minJs','httpServer']);
