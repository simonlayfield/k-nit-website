var gulp = require('gulp');
var replaceInclude = require('gulp-replace-include');

gulp.task('default',function() {

    return gulp.src('app/pages/**/*.html')
        .pipe(replaceInclude({
            src: 'app/pages/',
            path: ['dist/'],
            global: {
                "hello": "Howdy",
            },
            pages: {
                "index.html": {
                    title: "Homepage"
                },
                "about.html": {
                    title: "About Us"
                }
            }
        }))
        .pipe(gulp.dest('dist/'));

});
