const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function css() {
    return gulp 
        .src('sass/app.scss')
        .pipe(autoprefixer())
        .pipe(sass({outputStyle: 'expanded'})) //nested, compact, expanded, compressed
        .pipe(gulp.dest('CSS'))
}

function watch(){
    gulp.watch('sass/*.scss', css);
    gulp.watch('index.html');

}


//Tareas
gulp.task('css', css);
gulp.task('watch', gulp.parallel(watch));