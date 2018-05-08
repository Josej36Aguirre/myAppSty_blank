var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');
var rename = require('gulp-rename');

var paths = {
  sass: ['./scss/**/*.scss']
};

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
   gulp.src('.scss/*.scss')
  .pipe(sass({
    outputStyle:'compact',
    sourceComments: true
  }))
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(cleanCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', ['sass'], function() {
  gulp.watch(paths.sass, ['sass']);
});



/*************codigo nuevo***************/
/*const gulp = require('gulp'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer');

gulp.task('sass'()=>
  gulp.src('.scss/*.scss')
  .pipe(sass({
    outputStyle:'',
    sourceComments: false
  }))
  .pipe(autoprefixer({
    versions:['last 2 browser']
  }))
  .pipe(gulp.dest('.www/css/'))
  );
*/