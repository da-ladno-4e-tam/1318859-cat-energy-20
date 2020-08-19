const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const sync = require("browser-sync").create();
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const svgstore = require("gulp-svgstore");
const del = require("del");

const clean = () => {
  return del("build");
};
exports.clean = clean;

const copy = () => {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    "source/js/**/*.js",
    "source/*.ico"
  ], {
    base: "source"
  })
    .pipe(gulp.dest("build"));
};
exports.copy = copy;

const html = () => {
  return gulp.src("source/*.html")
    .pipe(gulp.dest("build"));
};
exports.html = html;

// svg
const sprite = () => {
  return gulp.src("source/img/**/icon-*.svg")
    .pipe(svgstore())
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"))
};
exports.sprite = sprite;

// Images
const images = () => {
  return gulp.src("source/img/**/*.{jpg,png,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 1}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
    ]))
};
exports.images = images;

// webp
const webpImages = () => {
  return gulp.src("source/img/**/*.{jpg,png}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("source/img"))
};
exports.webpImages = webpImages;

// Styles
const styles = () => {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(gulp.dest("build/css"))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
};
exports.styles = styles;

const build = (done) => {
  gulp.series(
    clean,
    copy,
    html,
    styles,
    sprite
  )(done)
};
exports.build = build;


// Server
const server = (done) => {
  sync.init({
    server: {
      baseDir: "build"
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
};
exports.server = server;

const start = (done) => {
  gulp.series(
    build,
    server,
    watcher
  )(done)
};
exports.start = start;

// Watcher
const watcher = () => {
  gulp.watch("source/sass/**/*.scss", gulp.series("styles"));
  gulp.watch("source/*.html", gulp.series("html")).on("change", sync.reload);
};

exports.default = gulp.series(
  styles, server, watcher
);
