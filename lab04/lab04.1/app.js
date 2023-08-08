var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var hbs = require('hbs');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var fptRouter = require('./routes/fpt'); //declare router
var mobileRouter = require('./routes/mobile');
var laptopRouter = require('./routes/laptop');

var app = express();

var mongoose = require('mongoose');
var uri = 'mongodb+srv://khoitmgch18513:18092000@cluster0.kzjtgat.mongodb.net/';

mongoose.connect(uri)
.then(()=>console.log("Connect DB succeed!"))
.catch((err)=>console.log(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/fpt', fptRouter);
app.use('/mobile', mobileRouter);
app.use('/laptop', laptopRouter);

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

app.listen(process.env.PORT || 3000);

module.exports = app;
