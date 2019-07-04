const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const fs = require('fs')
const port = 3000; // configure server port


// configure app to use bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

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