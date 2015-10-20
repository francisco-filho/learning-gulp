var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    sourcemaps = require('gulp-sourcemaps'),
    watch = require('gulp-watch'),
    babel = require('gulp-babel');

// CSS Tasks
gulp.task('stylus', function(){
    gulp.src('./src/css/*.styl')
        .pipe(sourcemaps.init())
        .pipe(stylus())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./public/css/'));
});

//es2015
gulp.task('es2015', function(){
    gulp.src('./src/js/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./public/js/'));
});

//Watch CSS and Javascript
gulp.task('watch', function(){
    gulp.watch(['./src/css/*.styl', './src/js/*.js'], 
               ['stylus','es2015']);
});

gulp.task('default', ['stylus','es2015']);
