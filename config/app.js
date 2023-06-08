const isProd = process.argv.includes("--production");
const isDev = !isProd;

module.exports = {
	isProd: isProd,
	isDev: isDev,

	htmlmin: {
		collapseWhitespace: isProd,
	},
	pug: {
		pretty: isDev,
	},
	webpack: {
		mode: isProd ? "production" : "development",
		devtool: "source-map"
	},
	imagemin: {
		verbose: true,
	},
	fonter: {
		formats: ["ttf", "woff", "eot", "svg"]
	},
	imagemin: {
		verbose: true
	},

}