var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var watch = require('gulp-watch');


const DIR_DIST = './assets/dist';

gulp.task('sass-compile', function() {
    return gulp.src('./assets/components/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(DIR_DIST))
});

gulp.task('concat-js', function() {
    return gulp.src('./assets/components/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(concat('main.js'))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(DIR_DIST));
});

gulp.task('watch', function(){
    gulp.watch('./assets/components/**/*.js', gulp.series('concat-js'));
    gulp.watch('./assets/components/**/*.scss', gulp.series('sass-compile'))
})
