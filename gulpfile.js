const {watch, series, parallel} = require('gulp');
const browserSync = require('browser-sync').create();

// Конфигурация
const path = require('./config/path.js')
const app = require('./config/app.js')


// Сервер
const server = () => {
	browserSync.init({
		server: {
			baseDir: path.root
		}
	});
};

// Задачи
const html = require('./task/html.js');
const clear = require('./task/clear.js');
const scss = require('./task/scss.js');
const scssProd = require('./task/scssProd.js');
const js = require('./task/js.js');
const img = require('./task/img.js');
const fonts = require('./task/fonts.js');
const video = require('./task/video.js');

// Наблюдение
const watcher = () => {
	watch(path.html.watch, html).on('all', browserSync.reload);
	watch(path.scss.watch, scss).on('all', browserSync.reload);
	watch(path.js.watch, js).on('all', browserSync.reload);
	watch(path.img.watch, img).on('all', browserSync.reload);
	watch(path.fonts.watch, fonts).on('all', browserSync.reload);
	watch(path.video.watch, video).on('all', browserSync.reload);
};

const build = series(
	clear,
	parallel(html, scssProd, js, img, fonts, video)
);

const dev = series(
	clear,
	parallel(html, scss, js, img, fonts, video, watcher, server)
);

// Задачи
exports.html = html;
exports.watch = watcher;
exports.clear = clear;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.fonts = fonts;
exports.video = video;


// Сборка
exports.default = app.isProd ? build : dev;

// Для разработки "gulp"
// Для продакшена "gulp --production"
