const gulp = require('gulp');
const jshint = require('gulp-jshint');

const express = require('express');
const controllers = require('./controllers');
const employee = require('./controllers/employee');
const http = require('http');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', controllers.index);
app.get('/employees', employee.list);

/*
var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
  app.use(express.errorHandler());
}
*/

// JS hint task
gulp.task('jshint', () => {
    gulp.src('*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('default', () => {

    http
      .createServer(app)
      .listen(app.get('port'))

    console.log("Express server listening on port " + app.get('port'));

});
