const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const fs = require('fs');
const cookieparser = require('cookie-parser');
const port = 3000; // configure server port



app.use(cookieparser());


// configure app to use bodyParser
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

// 
app.use(session({
    secret: 'rkswlrGhkdlxld', // 쿠키를 임의로 변조하는것을 방지하기 위한 sign값. 원하는 값을 넣어주자
    resave: false, // 세션을 언제나(변하지 않아도)) 저장할 것인지 정하는 값. express-session documentation에서는 이 값을 false로 하는것을 권장하고 필요에 따라 true로 설정.
    saveUninitialized: true // uninitialized 세션이란 새로 생겼지만 변경되지 않은 세션을 의미한다. true로 설정 할 것을 권장한다.
}))




// 정적파일(Static files)다루기
app.use(express.static(path.join(__dirname, 'public')));

// ejs 모듈
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// configure router
const router = require('./router/main')(app, fs);

// run server
app.listen(port, () => {
    console.log('Server listening ...' + port);
});