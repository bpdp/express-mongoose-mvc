const gulp = require('gulp');
const jshint = require('gulp-jshint');

const express = require('express');
const controllers = require('./app/controllers');
const employee = require('./app/controllers/employee');
const http = require('http');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'app', 'views'));
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

const taskJSHint = () => {
    gulp.src('*.js')
        .pipe(jshint({
          esversion: 6,
        }))
        .pipe(jshint.reporter('default'));
};

// JS hint task
gulp.task('jshint', taskJSHint);

gulp.task('default', () => {
  taskJSHint();

  http
    .createServer(app)
    .listen(app.get('port'));

  console.log("Express server listening on port " + app.get('port'));
});
