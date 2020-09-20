var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

//启动nodemon
gulp.task("node", function () {
    nodemon({
        script: 'app.js',
        ignore: ["gulpfile.js", "node_modules/"],
        env: {
            'NODE_ENV': 'development'
        }
    })
});

//启动browsersync
gulp.task('browsersync', ['node'], function () {
    var files = [
        'views/**/*.*',
        'static/css/*.*',
        'static/js/*.*',
        'static/img/*.*',
        'static/pages/*.*',
        'static/fonts/*.*'
    ];

    browserSync.init({
        proxy: 'http://localhost:8071/index',
        browser: ["360chrome"],
        files: files,
        port: 5000
    });

    gulp.watch(files).on("change", reload);
});

gulp.task('default', ["browsersync"], function () { });