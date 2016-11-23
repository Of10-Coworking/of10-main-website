const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const cp = require('child_process');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const notify = require('gulp-notify');
const gutil = require('gulp-util');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');

const siteRoot = '_site';
const cssFiles = 'css/**/*.?(s)css';

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

// minify js
gulp.task('javascript', function() {
  gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('js/'))
});

// minify images
gulp.task('images', function () {
    return gulp.src('img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('images'));
});

// minify css
gulp.task('css', () => {
   gulp.src(cssFiles)
     .pipe(concat('all.css'))
     .pipe(uglifycss({
        "maxLineLen": 80,
        "uglyComments": true
      })) 
     .pipe(gulp.dest('css/'));
 });

gulp.task('jekyll', () => {
  browserSync.notify(messages.jekyllBuild);
  const jekyll = cp.spawn('jekyll', ['build',
    '--watch',
    '--incremental',
    '--drafts'
  ]);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('serve', () => {
  browserSync.init({
    files: [siteRoot + '/**'],
    port: 4000,
    server: {
      baseDir: siteRoot
    }
  });

  gulp.watch(cssFiles, ['css']);
});

gulp.task('default', [ 'javascript', 'css', 'images']);
