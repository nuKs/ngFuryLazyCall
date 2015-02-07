var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    jsFiles = ['./src/ngFuryLazyCall.js'];

gulp.task('concat', function() {
  return gulp.src(jsFiles)
        .pipe(sourcemaps.init())
        .pipe(concat('ngFuryLazyCall.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['concat'], function() {
  return gulp.src(jsFiles)
        .pipe(sourcemaps.init())
        .pipe(concat('ngFuryLazyCall.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['build']);