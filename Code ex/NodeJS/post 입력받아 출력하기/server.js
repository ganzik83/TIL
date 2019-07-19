const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({
    extended: false // querystring 모듈 사용
}));

app.get('/', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write(`메인
    `)
    res.end();
});

app.post('/login', (req, res) => {
    var inputData = req.body;
    console.log(inputData);
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=UTF-8'
    });
    res.write('id : ' + inputData.id + ', password : ' + inputData.password + ' 를 입력받아 로그인 하였습니다');
    res.end();
})

app.post('/signin', (req, res) => {
    var inputData = req.body;
    console.log(inputData);
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=UTF-8'
    });
    res.write('id : ' + inputData.id +
        '<br>password : ' + inputData.password +
        '<br>name : ' + inputData.name +
        '<br>address : ' + inputData.address +
        '<br>phone : ' + inputData.phone +
        ' 를 입력받아 회원가입이 완료되었습니다');
    res.end();
})

app.post('/post', (req, res) => {
    console.log('/post 요청');
    console.log(req.body);
    res.send(req.body);
});

app.listen(port, () => {
    console.log('server listen at ...', port);
});