let ngrok         = require('ngrok');
let browserSync   = require('browser-sync').create();
let autoprefixer  = require('autoprefixer');
let gulp          = require("gulp");
let postcss       = require('gulp-postcss');
let sass          = require('gulp-sass');
let rename        = require('gulp-rename');
let minifyCSS     = require('gulp-minify-css');
let babel         = require('gulp-babel');
let concat        = require('gulp-concat');
let imagemin      = require('gulp-imagemin');

let config = require('./config');

function files() {
  return gulp.src(['**/*.html']).pipe(browserSync.stream());
}
function images() {
  gulp.src('app/src/images/**/*')
    .pipe(imagemin({ optimizationLevel: 3,  progressive: true,  interlaced: true }))
    .pipe(gulp.dest('app/dist/images'));
}
function scripts() {
  return gulp.src(config.scripts)
    .pipe(concat('app.js'))
    .pipe(babel())
    .pipe(gulp.dest('app/dist/scripts'))
    .pipe(browserSync.stream());
}
function style() {
  return gulp.src(config.styles)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest('app/dist/styles'))
    .pipe(browserSync.stream());
}

function minStyle() {
  return gulp.src(config.styles)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(postcss([autoprefixer()]))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifyCSS())
    .pipe(gulp.dest('app/dist/styles'))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "app"
    }
  }, function (err, bs) {
    ngrok.connect(bs.options.get('port'))
      .then(r => console.log("[\u001b[36;1mNgrok\u001b[0m] Started form ngrok: "+r))
      .catch(() => {
        console.log("[\u001b[36;1mNgrok\u001b[0m] Starting error.")
      });
  });

  gulp.watch('app/src/styles/**/*.scss', gulp.parallel(style, minStyle));
  gulp.watch('app/src/scripts/**/*.js', scripts);
  gulp.watch('app/src/images/**/*', images);
  gulp.watch('**/*.html', files);
}

exports.images = images;
exports.style = style;
exports.minStyle = minStyle;
exports.scripts = scripts;
exports.default = watch;
