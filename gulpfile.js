var gulp = require('gulp');
var mockServer = require('gulp-mock-server');

gulp.task('mock', function() {
  gulp.src('.')
    .pipe(mockServer({
        host: '30.20.93.91',
        // host: '127.0.0.1',
        port: 15000,
        allowCrossOrigin: true,
    }));
});
