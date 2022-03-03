const {src, dest, watch, series} = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass')(require('node-sass'))
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
// const sourcemaps = require('gulp-sourcemaps');
const sassLint = require('gulp-sass-lint');
const groupmq = require('gulp-group-css-media-queries');
const browserSync = require('browser-sync').create();
const purgecss = require('gulp-purgecss');
const cleanCSS = require('gulp-clean-css');

const SASS_SOURCES = [
    'assets/scss/*.scss', // This picks up our style.scss file at the root of the theme
    'assets/scss/**/*.scss' // All other Sass files in the /css directory
];

const ASSETS_DIR = 'assets/';
const STYLES_DIR = `${ASSETS_DIR}scss/`;

/**
 * Default task executed by running `gulp`
 */
// task('default', ['compile:sass'])

//Load Previews on Browser on dev
function livePreview(done) {
    browserSync.init({
        injectChanges: true,
        proxy: 'spirit-theme.local',
        port: 3000
    });
    done();
}

function devStyles() {
    const tailwindcss = require("tailwindcss");
    return src(`${STYLES_DIR}**/*`)
        .pipe(plumber()) // Prevent termination on error
        .pipe(sass({
            indentType: 'tab',
            indentWidth: 1,
            outputStyle: 'expanded' // Expanded so that our CSS is readable
        })).on('error', sass.logError)
        .pipe(postcss([
            tailwindcss(),
            require("autoprefixer")
        ]).on('error', sass.logError))
        .pipe(dest(`${ASSETS_DIR}css`)) // Output compiled files in the same dir as Sass sources
        .pipe(browserSync.stream({match: "**/*.css"}))
}

function watchFiles() {
    watch([`${STYLES_DIR}**/*`], series(devStyles));
    watch([
        '*.php',
        'framework/**/*.php',
        'template-parts/**/*.php'
    ], series(devStyles, previewReload));
    watch('tailwind.config.js', series(devStyles));
    watch([`${ASSETS_DIR}**/*.js`], series(previewReload));
    console.log("Watching for Changes..\n");
}

function prodStyles() {
    return src([`${ASSETS_DIR}css/**/*`])
        .pipe(groupmq()) // Group media queries!
        .pipe(purgecss({
            content: [`**/*.php`,'**/*.scss','**/*.html'],
            defaultExtractor: content => {
                const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
                const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];
                return broadMatches.concat(innerMatches);
            }
        }))
        .pipe(cleanCSS({compatibility: "ie8"}))
        .pipe(dest(`${ASSETS_DIR}css`));
}

function buildFinish(done) {
    console.log(`Production build is complete.\n`);
    done();
}

// Triggers Browser reload
function previewReload(done) {
    console.log("Reloading Browser Preview.\n");
    browserSync.reload();
    done();
}

exports.dev = series(
    devStyles,
);

exports.default = series(
    devStyles,
    livePreview,
    watchFiles
);

exports.prod = series(
    devStyles,
    prodStyles,
    buildFinish
);
