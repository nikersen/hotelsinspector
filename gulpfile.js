'use strict';

var gulp = require('gulp'),
	watch = require('gulp-watch'),
	prefixer = require('gulp-autoprefixer'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	rigger = require('gulp-rigger'),
	buffer = require('vinyl-buffer'),
	merge = require('merge-stream'),
	csso = require('gulp-csso'),
	cssmin = require('gulp-minify-css'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	rimraf = require('rimraf'),
	browserSync = require("browser-sync"),
	spritesmith = require('gulp.spritesmith'),
	reload = browserSync.reload;

	
var path = {
	build: { //Тут мы укажем куда складывать готовые после сборки файлы
		html: 'www/',
		js: 'www/js/',
		css: 'www/css/',
		img: 'www/images/',
		icons: 'www/i/',
		fonts: 'www/fonts/'
	},
	src: { //Пути откуда брать исходники
		html: 'src/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
		js: 'src/js/**/*.js',//В стилях и скриптах нам понадобятся только main файлы
		css: 'src/css/**/*.*',
		img: 'src/images/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
		icons: 'src/i/**/*.png', // Для спрайтов иконок
		fonts: 'src/fonts/**/*.*'
	},
	watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
		html: 'src/**/*.html',
		js: 'src/js/**/*.js',
		css: 'src/css/**/*.scss',
		img: 'src/images/**/*.*',
		fonts: 'src/fonts/**/*.*'
	},
	clean: './www'
};

var config = {
	server: {
		baseDir: "./www"
	},
	tunnel: true,
	host: 'localhost',
	port: 9000,
	logPrefix: "Frontend_Mezin"
};


// =======================
// Таски 
// =======================

// HTML
gulp.task('html:build', function () {
	gulp.src(path.src.html)
			.pipe(rigger())
			.pipe(gulp.dest(path.build.html))
			.pipe(reload({stream: true}));
});

// javascript
gulp.task('js:build', function () {
	gulp.src(path.src.js)
			.pipe(rigger())
			.pipe(sourcemaps.init())
			// .pipe(uglify())
			.pipe(sourcemaps.write())
			.pipe(gulp.dest(path.build.js))
			.pipe(reload({stream: true}));
});

// CSS
gulp.task('css:build', function () {
	gulp.src(path.src.css)
			.pipe(sass())
			.pipe(prefixer({
				browsers: ['last 10 versions'],
			}))
			// .pipe(cssmin())
			.pipe(gulp.dest(path.build.css))
			.pipe(reload({stream: true}));
});

// image
gulp.task('image:build', function () {
	gulp.src(path.src.img) //Выберем наши картинки
		.pipe(imagemin({ //Сожмем их
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()],
			interlaced: true
		}))
		.pipe(gulp.dest(path.build.img)) //И бросим в build
		.pipe(reload({stream: true}));
});

// icons sprite
gulp.task('sprite:build', function () {
  var spriteData = gulp.src(path.src.icons).pipe(spritesmith({
	imgName: '../i/icons-sprite.png',
	cssName: '_icons-sprite-mixins.scss',
	padding: 10
  }));
 
  // Pipe image stream through image optimizer and onto disk 
  var imgStream = spriteData.img
	// DEV: We must buffer our stream into a Buffer for `imagemin` 
	.pipe(buffer())
	.pipe(imagemin())
	.pipe(gulp.dest(path.build.icons));
 
  // Pipe CSS stream through CSS optimizer and onto disk 
  var cssStream = spriteData.css
	.pipe(gulp.dest('src/css/components/icons/'));
 
  // Return a merged stream to handle both `end` events 
  return merge(imgStream, cssStream);
});

// fonts
gulp.task('fonts:build', function() {
	gulp.src(path.src.fonts)
		.pipe(gulp.dest(path.build.fonts))
});

// build
gulp.task('build', [
	'html:build',
	'js:build',
	'css:build',
	'fonts:build',
	'image:build'
]);

// watch
gulp.task('watch', function(){
	watch([path.watch.html], function(event, cb) {
		gulp.start('html:build');
	});
	watch([path.watch.css], function(event, cb) {
		gulp.start('css:build');
	});
	watch([path.watch.js], function(event, cb) {
		gulp.start('js:build');
	});
	watch([path.watch.img], function(event, cb) {
		gulp.start('image:build');
	});
	watch([path.watch.fonts], function(event, cb) {
		gulp.start('fonts:build');
	});
});

// livereload
gulp.task('webserver', function () {
	browserSync(config);
});

// clean
gulp.task('clean', function (cb) {
	rimraf(path.clean, cb);
});

// all
gulp.task('default', ['build', 'webserver', 'watch']);