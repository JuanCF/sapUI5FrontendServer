"use strict";

var fs = require('fs'),
	path = require('path'),
	gulp = require('gulp'),
	less = require('gulp-less'),
	rename = require('gulp-rename');

gulp.task('processLess', function () {
	var fileToProcess = path.join(__dirname, '..', 'Mobile', 'common', 'css', 'main.less');
	var destPath = path.join(__dirname, '..', 'Mobile', 'common', 'css');
	console.log(fileToProcess);
	console.log(destPath);
	return gulp.src(fileToProcess)
		.pipe(less())
		/*.pipe(rename({
			extname: '.min.css'
		}))*/
		.pipe(gulp.dest(destPath));
});

gulp.task('watch', function () {
	var toWatchPath = path.join(__dirname, '..', 'Mobile', 'common', 'css','**.less');
	gulp.watch([toWatchPath], ['processLess']);
});

gulp.task('default', ['processLess', 'watch']);
