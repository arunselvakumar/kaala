var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    return gulp.src('src/scss/style.scss')
               .pipe(sass())
               .pipe(gulp.dest('builds'))
               .pipe(browserSync.reload({ stream: true }))
});

gulp.task('watch', ['browserSync'], function() {
    gulp.watch('src/scss/*.scss', ['sass']);
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: true
  })
})
