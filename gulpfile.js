var gulp = require("gulp");
var del = require("del");

var pug = require("gulp-pug");
var inlineCss = require('gulp-inline-css');

var sass = require("gulp-sass");
var sourceMaps = require("gulp-sourcemaps");
var prefix = require("gulp-autoprefixer");


var pugTask = function () {
	return gulp
		.src(["./source/**/*.pug", "!./source/**/extends/**/*.pug"])
		.pipe(pug({
			pretty: true
		}))
		.pipe(inlineCss())
		.pipe(gulp.dest("./dist"));
};

gulp.task("pug", pugTask);


var scssTask = function () {
	return gulp
		.src(["./source/**/*.scss", "!./source/**/include/**/*.scss", "!./source/**/_*.scss"])
		.pipe(sourceMaps.init())
		.pipe(sass({
			outputStyle: "expanded" // nested (default), expanded, compact, compressed
		}).on("error", sass.logError))
		.pipe(prefix({}))
		.pipe(sourceMaps.write("."))
		.pipe(gulp.dest("./dist"));
};

gulp.task("scss", scssTask);


gulp.task("pugAfterSCSS", ["scss"], function () {
	return pugTask();
});

var watch = function () {
	gulp.watch(["./source/**/*.pug"], ["pug"]);
	gulp.watch(["./source/**/*.scss"], ["pugAfterSCSS"]);
};

gulp.task("watch", watch);

gulp.task("default", ["watch"]);