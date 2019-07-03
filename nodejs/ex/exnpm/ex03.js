const express = require('express');
const app = express();
const port = 3000;

// 미들웨어 1
app.use(function (req, res, next) {
    console.log('사용자 미들웨어1');
    req.body = {};
    req.body.id = 'hong';
    next();
})

// 미들웨어 2
app.use(function (req, res, next) {
    console.log('사용자 미들웨어2');
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=UTF-8'
    });
    res.write(`<h1>${req.body.id}</h1>`);
    res.end();
})


app.get('/', (req, res) => {
    console.log('/ 요청받음');
    res.send('<h1>welcome</h1>');
});


app.listen(port, () => {
    console.log('Server listening...' + port);
});