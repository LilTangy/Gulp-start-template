const { src, dest } = require('gulp');

// Конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');

const video = () => {
	return src(path.video.src)
		.pipe(dest(path.video.dest))
}

module.exports = video;