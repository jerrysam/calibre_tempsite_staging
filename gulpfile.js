var gulp 				= require('gulp');  
var sass 				= require('gulp-sass');  
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

gulp.task('sass', function () {  
    gulp.src('sass/main.scss')
        .pipe(sass({includePaths: ['scss']}))
        .pipe(gulp.dest('css'));
});

gulp.task('browser-sync', function() {  
    browserSync.init(["css/*.css", "js/*.js"], {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['sass', 'browser-sync'], function () {  
    gulp.watch("sass/*.scss", ['sass']);
});