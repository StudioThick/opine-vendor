var gulp = require('gulp');
var opine = require('gulp-opine');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

var module = opine.module('vendor');


var includes = module.getConfig('includes', []);
var target = module.getConfig('target', 'vendor.js');
var dest = opine.getDest('scripts');
var debug = module.getConfig('debug', true);

module.addBuild();
module.addWatch(includes);

module.task(function() {
    var b = gulp.src(includes)
        .pipe(concat(target));

    if(!debug) {
        b = b.pipe(uglify());
    }

    return b
        .pipe(gulp.dest(dest))
        .pipe(module.size());
});
