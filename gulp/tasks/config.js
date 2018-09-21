var gulp = require('gulp');
var rename = require('gulp-rename');
var template = require('gulp-template');

gulp.task('config', function () {
    return gulp.src([ 'templates/OzoneConfig.js.ejs' ])
        .pipe(template({ env: process.env }))
        .pipe(rename('OzoneConfig.js'))
        .pipe(gulp.dest('dist'));
});
