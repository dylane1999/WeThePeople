var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session')
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var quizRouter = require('./routes/quiz');
var preambleRouter = require('./routes/articles/preamble');
var article1Router = require('./routes/articles/article1');
var article5Router = require('./routes/articles/article5');
var article4Router = require('./routes/articles/article4');
var article2Router = require('./routes/articles/article2');
var article3Router = require('./routes/articles/article3');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.use(cookieSession({
  name: 'session',
  keys: ['key1'],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/quiz', quizRouter);
app.use('/preamble', preambleRouter);
app.use('/article1', article1Router);
app.use('/article5', article5Router);
app.use('/article4', article4Router);
app.use('/article2', article2Router);
app.use('/article3', article3Router);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
