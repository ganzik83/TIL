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
})

app.get('/html', (req, res) => {
    res.render('test.html');
})

app.get('/html2', (req, res) => {
    res.render('test2.html');
})

app.listen(port, () => {
    console.log('Server listening ...' + port);
})