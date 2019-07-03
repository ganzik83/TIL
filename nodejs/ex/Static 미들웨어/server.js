const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// app.use('서비스경로', express.static(path.join(__dirname, '경로')))
// express모듈 static메소드로 미들웨어 사용. path 모듈 join 메소드 이용 현재 디렉터리 아래 public 디렉터리 밑에 모든 파일들을 클라이언트에게 넘겨준다
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send(`<img src="images/123.jpg">`);
})

app.listen(port, () => {
    console.log('Server listening ...' + port);
})