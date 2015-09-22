var gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    del = require('del'),
    nodemon = require('gulp-nodemon'),
    source = require('vinyl-source-stream');

gulp.task('clean', function(cb) {
  del(['build/*'], cb);
});

gulp.task('copy', function() {
  return gulp.src('client/index.html')
    .pipe(gulp.dest('build'));
});

gulp.task('transform', function () {
  browserify({
    entries: 'client/js/main.js',
    extensions: ['.js'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('build'));
});

gulp.task('default', ['clean', 'transform', 'copy'], function() {
  gulp.watch('client/**/*', ['transform']);
  nodemon({ script: 'index.js', ignore: ['gulpfile.js', 'build', 'client', 'dist'] });
});
