const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const favicon = require('serve-favicon');

const multer = require('multer');
const upload = multer({
  dest: './public/uploads',
  limits: {
    fileSize: 100 * 1024 * 1024,
    files: 1
  }
});

// home controller
const index = require('./server/controllers/index');
// login controller
const auth = require('./server/controllers/auth');
// comments controller
const comments = require('./server/controllers/comments');
// videos controller
const videos = require('./server/controllers/videos');
// images controller
const images = require('./server/controllers/images');

// mongoose ODM
const mongoose = require('mongoose');
// module for save session
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
// passport
const passport = require('passport');
// flash message
const flash = require('connect-flash');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// config to database
const dbUrl = require('./server/config/dburl.js');
// connect to database
mongoose.connect(dbUrl.url);
// 몽고 db가 실행 중인지 확인
mongoose.connection.on('error', function () {
  console.error('MongoDB connection Error. Make sure MongoDB is running.');
});
// setup passport
require('./server/config/passport')(passport);




app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());

const sass = require('node-sass');
app.use(sass({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));

// public directory
app.use(express.static(path.join(__dirname, 'public')));

// session privatekey
app.use(session({
  secret: 'rlghdrkswlr',
  saveUninitialized: true,
  resave: true,
  store: new MongoStore({
    url: dbUrl.url,
    collection: 'sessions'
  })
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// indexRouter
app.get('/', index.show);
app.get('/login', auth.signin);
app.post('/login', passport.authenticate('local-login', {
  successRedirect: '/profile',
  failureRedirect: '/login',
  failureFlash: true
}));
app.get('/signup', auth.signup);
app.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/profile',
  failureRedirect: '/signup',
  failureFlash: true
}));
app.get('/profile', auth.isLoggedIn, auth.profile);
app.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});
// comments
app.get('/comments', comments.hasAuthorization, comments.list);
app.post('/comments', comments.hasAuthorization, comments.create);
// videos
app.get('/videos', videos.hasAuthorization, videos.show);
app.post('/videos', videos.hasAuthorization, upload.single('video'), videos.uploadVideo);
// images
app.post('/images', images.hasAuthorization, upload.single('image'), images.uploadImage);
app.get('/images-gallery', images.hasAuthorization, images.show);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

app.set('port', process.env.PORT || 3000);
