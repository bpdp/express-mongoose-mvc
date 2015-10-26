var gulp = require('gulp');
var jshint = require('gulp-jshint');
 
var express = require('express')
  , controllers = require('./controllers')
  , employee = require('./controllers/employee')
  , http = require('http')
  , path = require('path');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
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
gulp.task('jshint', function() {
    gulp.src('*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('default', function() {

    http.createServer(app).listen(app.get('port'))
    console.log("Express server listening on port " + app.get('port'));

});
