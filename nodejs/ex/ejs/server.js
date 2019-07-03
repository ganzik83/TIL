const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static(path.join(__filename, 'public')))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.urlencoded({
    extended: false // querystring 모듈 사용
}))



app.get('/', function (req, res) {
    res.send('<h1>homepage</h1>');
    console.log('/ 페이지에 접속 완료')
})

app.get('/html', (req, res) => {
    res.render('test.html');
    console.log('/html1 페이지에 접속 완료')
})

app.get('/html2', (req, res) => {
    res.render('test2.html');
    console.log('/html2 페이지에 접속 완료')
})

app.get('/login', (req, res) => {
    res.render('login.html');
    console.log('/login 페이지에 접속 완료')
})

app.get('/loginok', (req, res) => {
    res.render('loginok.html');
    console.log('로그인이 완료되었습니다')
})


app.listen(port, () => {
    console.log('Server listening ...' + port);
})