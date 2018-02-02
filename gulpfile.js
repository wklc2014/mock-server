var gulp = require('gulp');
var mockServer = require('gulp-mock-server');

gulp.task('mock', function() {
  gulp.src('.')
    .pipe(mockServer({
        host: '10.63.68.129',
        port: 15000,
        allowCrossOrigin: true,
    }));
});
