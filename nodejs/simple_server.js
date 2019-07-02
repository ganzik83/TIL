const http = require("http");
const server = http.createServer();

// query(주소에 물음표 다음으로 붙어 들어오는 값들) 파싱 하는 라이브러리 모듈
const querystring = require('querystring');

// url 모듈 가져오기
const url = require('url');

var port = 3000;

// 서버가 대기를 하고 있다. 요청을 기다림
server.listen(port, function () {
  console.log("웹 서버 대기중... : %d", port);
});

server.on("connection", function (socket) {
  var addr = socket.address();
  console.log(
    "클라이언트 : (" + addr.address + ":" + addr.port + ")이 접속했습니다"
  );
});

server.on("close", function () {
  console.log("웹 서버 종료됨");
});

server.on("request", function (req, res) {
  // require의 url을 parse해서 urlp에 담는다
  var urlp = url.parse(req.url, true);
  // urlp의 pathname을 콘솔에 나타낸다
  console.log(urlp);
  // localhost:3000/login? 뒤에 나오는 쿼리 스트링이라고 가정해보자
  var samplequery = "id=kihong&password=1234"

  // 요청값의 url중 querystring 모듈을 이용하여 파싱해서 query 변수에 담기
  var query = querystring.parse(samplequery);
  console.log(query);
  console.log(query.id);
  console.log(query.password);

  // 쿼리스트링을 파싱하거나 url를 나눠서 처리하는 것 들을 쉽게 해주는 것은 express 모듈이다




  if (urlp.pathname == '/login') {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    })
    res.write(`<h2>${urlp.pathname}</h2>`);
    res.write("<h1>Login page</h1>");
  } else {

    // 서버에서 응답 할 때 http header에 200 OK, 컨텐츠 타입은 html을 포함해서 보낸다
    res.writeHead(200, {
      'Content-Type': 'text/html'
    })

    res.write(`<h2>url.search : ${urlp.search}</h2>`);
    res.write(`<h2>url.pathname : ${urlp.pathname}</h2>`);
    res.write(`<h2>url.${urlp.pathname}</h2>`);
    res.write(`<h2>${urlp.pathname}</h2>`);
    res.write(`<h2>${urlp.pathname}</h2>`);
    res.write("<h1>Hello World</h1>");

    res.end();
  }
});