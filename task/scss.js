const { src, dest } = require('gulp');

// Конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');

// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');
const sourcemaps = require('gulp-sourcemaps');

const scss = () => {
	return src(path.scss.src)
		.pipe(plumber({
			errorHandler: notify.onError(error => ({
				title: 'SCSS',
				message: error.message
			}))
		}))
		.pipe(sassGlob())
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(rename({ suffix: '.min' }))
		.pipe(sourcemaps.write())
		.pipe(dest(path.scss.dest));
};


module.exports = scss;
