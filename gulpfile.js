var gulp = require('gulp'),
	browserify = require('browserify'),
	babelify = require('babelify'),
	source = require('vinyl-source-stream'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	gutil = require('gulp-util'),
	uglify = require('gulp-uglify');

gulp.task('build-scss', function() {
  return gulp.src('./src/assets/styles/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public'));
});	
	
gulp.task('es6', function() {
	browserify({
    	entries: './src/index.js',
    	debug: true
  	})
    .transform(babelify,{
	  presets:["es2015", "react"]
	})
    .on('error',gutil.log)
    .bundle()
    .on('error',gutil.log)
    .pipe(source('app.min.js'))
    .pipe(gulp.dest('./public'));
});

gulp.task('watch',function() {
	gulp.watch('./src/**/*.js',['es6']);
	gulp.watch('./src/assets/styles/**/*.scss', ['build-scss']);
});
 
gulp.task('default', ['watch']);