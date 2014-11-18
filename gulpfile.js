var gulp = require('gulp');
var watch = require('gulp-watch');
var imagemin = require('gulp-imagemin');
var less = require('gulp-less');
var path = require('path');


gulp.task('default', function () {
    return gulp.src('img/original/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}]
        }))
        .pipe(gulp.dest('img/'));
});


gulp.task('less', function () {
    gulp.src('less/name.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
    watch('less/**/*.less', function (files, cb) {
        gulp.start('less', cb);
    });
});
