# Docker compose를 이용해서 노드서버를 구동하고 redis서버 컨테이너 두 개를 연동하기

실습하기

```bash
다음 조건에 맞는 프로젝트를 생성하고 Dockerfile 및 docker-compose.yml 파일을 작성해서 압축한 후 제출하시오.

노드 서버 구동 (node-server)
localhost:8081/        (<= 본인 이름 표시)
localhost:8081/one   (<= redis-one server의 카운터 표시)
localhost:8081/two	 (<= redis-two server의 카운터 표시)

두 개의 redis 서버 구동 (redis-one, redis-two)
노드 서버의 이미지는 node:10-alpine을 사용
노드 서버는 8081포트에 매핑
```

app.js 파일은 다음을 참고

```js
const express = require('express');
const redis = require('redis');

const app = express();

const client = redis.createClient({
    host:'redis-server',
    port:6379
});
client.set('visits', 0);

app.get('/', (req, res) => {
    res.send('<본인 이름> 홈페이지 ');
});

app.get('/one', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send('page one :  ' + visits);
        client.set('visits', parseInt(visits) + 1);
    });
});

app.get('/two, (req, res) => {
    client.get('visits', (err, visits) => {
        res.send('page two :  ' + visits);
        client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(8081, () =>{
    console.log('Listening 8081 port');
});
```

## 1. 프로젝트 생성

```bash
mkdir node-server

cd node-server

# package.json 생성
npm init

# express 모듈 설치
npm install --save express

# redis 모듈 설치
npm install --save redis
```

## package.json 파일 확인 및 수정 (start script 추가)

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

## app.js 파일 추가

```js
const express = require("express");
const redis = require("redis");

const app = express();

// redis-one 서버 연결 설정
const redisOne = redis.createClient({
  host: "nodeserver_redis-one_1",
  port: 6379
});
redisOne.set("visits", 0);

// redis-two 서버 연결 설정
const redisTwo = redis.createClient({
  host: "nodeserver_redis-two_1",
  port: 6379
});
redisTwo.set("visits", 0);

app.get("/", (req, res) => {
  res.send("김기홍 홈페이지 ");
});

// localhost:8081/one 에 접속하면 redis-one 서버와 통신한다
//visits 데이터를 받아와서 카운트 1을 추가한다
app.get("/one", (req, res) => {
  redisOne.get("visits", (err, visits) => {
    res.send("page one :  " + visits);
    redisOne.set("visits", parseInt(visits) + 1);
  });
});

// localhost:8081/two 에 접속하면 redis-two 서버와 통신한다
//visits 데이터를 받아와서 카운트 1을 추가한다
app.get("/two", (req, res) => {
  redisTwo.get("visits", (err, visits) => {
    res.send("page two :  " + visits);
    redisTwo.set("visits", parseInt(visits) + 1);
  });
});

// nodejs 서버를 8081번 포트로 통신한다
app.listen(8081, () => {
  console.log("Listening 8081 port");
});
```

## Dockerfile 생성

```Dockerfile
FROM node:10-alpine

# Install some dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./

# Default command
CMD ["npm", "start"]
```

## Docker-compose.yml 파일 생성

docker-compose.yml

```yaml
version: "2"
services:
  redis-one:
    image: "redis"
  redis-two:
    image: "redis"
  node-server:
    build: .
    ports:
      - 8081:8081
```

## docker-compose 설치 및 실행

```bash
sudo apt-get install docker-compose

sudo docker-compose up --build
```

---

docker-compose로 묶인 컨테이너는 각자 ip와 포트를 할당받아 하나의 네트워크로 구성이 된다

위의 실습 예제에서 노드서버와 redis서버 두 대가 통신을 할 때 ip:port를 지정해줘도 되지만
각각의 redis서버 컨테이너의 이름을 지정해줘도 통신이 가능하다
