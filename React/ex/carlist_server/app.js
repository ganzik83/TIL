const express = require("express");
const app = express();
const path = require("path"); // path라는 모듈을 쓰는 이유는 윈도우, unix등의 호환 문제 때문이다. window: \bin\www, unix: /bin/www
const fs = require("fs"); // 파일 생성, 삭제 등 컨트롤
const port = 5001;

const cookieparser = require("cookie-parser");
const session = require("express-session");
// const FileStore = require("session-file-store")(session); // https://www.npmjs.com/package/session-file-store
const flash = require("connect-flash"); // https://www.npmjs.com/package/connect-flash

const logger = require("morgan"); // 로깅 모듈 https://www.npmjs.com/package/morgan

// passport 로그인과 express-session
const passport = require("passport");

// MongoDB 접속 express 아래에 위치해야함
const mongoose = require("mongoose"); // mongodb 연동 모듈
const MongoStore = require("connect-mongo")(session); // session값을 mongoDB에 저장
const mongodbUrl = require("./server/config/mongodb"); // setup mongodb database url

// const jwt = require('jsonwebtoken'); // https://www.npmjs.com/package/jsonwebtoken // https://fkkmemi.github.io/nemv/nemv-040-hello-token/

// 암호화 모듈
const bcrypt = require("bcryptjs"); // https://github.com/dcodeIO/bcrypt.js

// configure app to use bodyParser
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(cookieparser());

// 정적파일(Static files)다루기
app.use(express.static(path.join(__dirname, "public")));

// view engine setup. ejs 모듈
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

// connect to mongodb server
var db = mongoose.connection;
db.on(
  "error",
  console.error.bind(
    console,
    "MongoDB Connection Error. Make sure MongoDB is running."
  )
);
db.once("open", () => {
  // connected to mongodb server
  console.log("Connected to mongod server");
});

// connect mongodb
mongoose.connect(mongodbUrl.url, {
  useNewUrlParser: true
});
mongoose.set("useCreateIndex", true); // (node:24925) DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
// https://github.com/Automattic/mongoose/issues/6890
// https://fkkmemi.github.io/nemv/nemv-045-user-model/

// passport session
app.use(
  session({
    secret: "rkswlrGhkdlxld", // 쿠키를 임의로 변조하는것을 방지하기 위한 sign값. 원하는 값을 넣어주자
    resave: false, // 세션을 언제나(변하지 않아도)) 저장할 것인지 정하는 값. express-session documentation에서는 이 값을 false로 하는것을 권장하고 필요에 따라 true로 설정.
    saveUninitialized: true, // uninitialized 세션이란 새로 생겼지만 변경되지 않은 세션을 의미한다. true로 설정 할 것을 권장한다.
    // store: new FileStore() // session-file-store 모듈을 사용해서 세션값을 저장한다,
    store: new MongoStore({
      url: mongodbUrl.url,
      collection: "sessions"
    })
  })
);

// setup passport
require("./server/config/passport")(passport);
// Initialize passport auth
app.use(passport.initialize());
// 영구적인 로그인 세션
app.use(passport.session());

// define model
const userData = require("./models/user");

// router
const apiRouter = require("./router/api")(express);
const indexRouter = require("./router/index")(express);
const usersRouter = require("./router/user")(express, passport);

app.use(logger("dev")); // 로깅 모듈 사용
app.use(flash()); // flash message // connect-flash 모듈 사용

// session 값을 전역(모든페이지)에서 사용 할 수 있게 해준다.
app.use((req, res, next) => {
  res.locals.sess_user = req.session.passport;
  next();
});

// routing
app.use("/api", apiRouter);
app.use("/users", usersRouter);
app.use("/", indexRouter);

// catch 404 and forward to error handler.404 응답을 잡고 error handler로 보낸다.
app.use((req, res, next) => {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// run server
app.listen(port, () => {
  console.log(`Server running at ${port}`);
});

// reference
// https://fkkmemi.github.io/nemv/
