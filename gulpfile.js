var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var less = require('gulp-less');
var path = require('path');
//
// gulp.task('sass', function () {
//     gulp.src('./sandBox/scss/core.scss')
//         .pipe(sass({includePaths: ['./sandBox/scss']}))
//         .pipe(gulp.dest('./sandBox/css'));
// });
gulp.task('less', function () {
  return gulp.src('./sandBox/scss/*.less')
  .pipe(less({
    paths: [ path.join(__dirname, 'less', 'includes') ]
  }))
  .pipe(gulp.dest('./sandBox/css'));
});

gulp.task('browser-sync', function() {
    browserSync.init(["./sandBox/css/*.css", "sandBox/js/*.js"], {
        server: {
            baseDir: "./sandBox"
        }
    });
});




gulp.task('default', ['less', 'browser-sync'], function () {
    gulp.watch("sandBox/scss/*.less", ['less']);
});
//
// gulp.task('default', ['sass', 'browser-sync'], function () {
//     gulp.watch("sandBox/scss/*.scss", ['sass']);
// });
