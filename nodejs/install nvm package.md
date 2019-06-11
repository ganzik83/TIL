# install nvm package

<https://github.com/nvm-sh/nvm>

## NVM 설치

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
# or
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```

## Node 10.14.2 설치

```bash
nvm install 10.14.2
```

## node.js 설치 확인

```bash
node -v
```

## 프로젝트 디렉터리 생성

```bash
# /root/docker/ 디렉터리에 simpleweb 디렉터리 만들기
mkdir simpleweb

cd simpleweb
```

## package.json 생성

```bash
npm init
```

## express 모듈 설치

```bash
npm install --save express
```

### package.json 파일 확인 및 수정 (start script 추가)

```json
{
  "name": "simpleweb",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

### app.js 파일 추가

```js
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hi there");
});

app.listen(8080, () => {
  console.log("Listening at 8080");
});
```

### node 서버 동작

```
node app.js
# or
npm start
```

브라우저에서 서버가 정상 작동하는지 확인  
`http://localhost:8080`
