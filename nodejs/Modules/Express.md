# Express module

<https://www.npmjs.com/package/express>

## 설치

```bash
sudo npm install --save express
```

## 간단한 서버 만들기

```js
const express = require("express");
const app = express();
const port = 3000;

app.get("/", function(req, res) {
  console.log("/ 요청이 들어옴");
  res.send("<h1>홈페이지</h1>");
});

app.get("/about", (req, res) => {
  console.log("/ about 요청이 들어옴");
  // .send는 한 줄의 명령어만 전송 가능하다
  res.send("<h1>About</h1>");

  // .writeHead, .end 메소드를 사용하면 .write를 이용하여 여러 명령을 전송 할 수 있다
  res.writeHead(200, {
    "Content-Type": "text/html"
  });
  res.write("라떼는 마리야");
  res.end();
});

// 쿼리 스트링을 이용한 방법
app.get("/query", function(req, res) {
  var id = req.query.id;
  var name = req.query.name;
  console.log(id, ", ", name);
  console.log(req.query);
  res.send(req.query);
});

// Semantic URL을 이용한 방법
app.get("/semantic/:book/:page", function(req, res) {
  // json 형식을 params로 가져온다.
  var book = req.params.book;
  var page = req.params.page;
  res.send(book + ": " + page);

  console.log(req.params);
});

app.listen(port, function() {
  console.log("server listen at ..." + port);
});
```
