"use strict"

const babel = require("gulp-babel");
const del = require("del");
const gulp = require("gulp");
const sass = require("gulp-sass")(require('node-sass'));

let paths = {
    scss: [ "src/angular-carousel.scss" ],
    main: [ "src/angular-carousel.js" ],

    dest: "dist/"
};

function carousel_clean() {
    return del([ paths.dest ]);
}

function carousel_sass() {
    return gulp.
        src(paths.scss).
        pipe(sass()).
        pipe(gulp.dest(paths.dest));
}

function carousel_js() {
    return gulp.src(paths.main).
        pipe(babel({
            "presets": [ "es2015" ]
        })).
        pipe(gulp.dest(paths.dest));
}

//gulp.task("carousel", [ "carousel_sass", "carousel_js" ]);

//gulp.task("clean", [ "carousel_clean" ]);
//gulp.task("default", [ "carousel" ]);
exports.default = gulp.series(carousel_clean, carousel_sass, carousel_js);