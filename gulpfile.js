var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');
var scss = require('gulp-ruby-sass');
var gulpFilter = require('gulp-filter');
var sourcemap = require('gulp-sourcemaps');

var runSequence = require('run-sequence'),
    minifyCss = require('gulp-minify-css'),
    concat = require('gulp-concat');
// var imagemin = require('gulp-imagemin');

var path = {
  normalize: 'app/bower_components/normalize.css/normalize.css',
  dir: './dist',
  scss: 'src/scss/*.scss',
  css: 'dist/css'
};

gulp.task('default', function () {
    var spriteData = gulp.src('src/img/icon/*.png').pipe(spritesmith({
        imgName: 'icon.png',
        cssName: 'g_icon.scss'
    }));
    spriteData.img.pipe(gulp.dest('src/img/'));
    spriteData.css.pipe(gulp.dest('src/libs/scss/'));
});

gulp.task('styles', function(callback) {
  runSequence('scss', 'css', callback);
});

gulp.task('scss',function() {
  return scss(path.scss)
   .on('error',function(err) {
      console.error('Error!', err.message);
   })
   .pipe(gulp.dest(path.css));
});

gulp.task('css', function() {
  return gulp.src([path.normalize, './tmp/styles/main.css'])

  .pipe(sourcemap.init())
  .pipe(minifyCss())
  .pipe(sourcemap.write())
  .pipe(gulp.dest(path.css));
});



gulp.task('sass', function() {
    sass('src/scss/*.scss', {sourcemap: true})
        .on('error', sass.logError)
        // for inline sourcemaps
        .pipe(sourcemaps.write())
        // for file sourcemaps
        .pipe(sourcemaps.write('maps', {
            includeContent: false,
            sourceRoot: 'source'
        }))
        .pipe(gulp.dest('result'))
});

// gulp.task('sass', function() {
//   var sassConfig = config.sass.options;
//
//   sassConfig.onError = browsersync.notify;
//
//   // Don’t write sourcemaps of sourcemaps
//   var filter = gulpFilter(['*.css', '!*.map'], { restore: true });
//
//   browsersync.notify('Compiling Sass');
//
//   return sass(config.sass.src, sassConfig)
//     .pipe(plumber())
//     .pipe(sourcemaps.init())
//     .pipe(autoprefixer(config.autoprefixer))
//     .pipe(filter) // Don’t write sourcemaps of sourcemaps
//     .pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: 'app/_assets/scss' }))
//     .pipe(filter.restore) // Restore original files
//     .pipe(gulp.dest(config.sass.dest));
// });
