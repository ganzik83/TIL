# React - Node - Hyperledger

## node 설치

node version을 8.9.0으로 설치한다

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

source .bashrc

nvm install 8.9.0

# 확인
node -v
npm -v
```

yarn 패키지 설치

```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt-get update && sudo apt-get install yarn

yarn --version
```

## 프로젝트 디렉토리 생성

```bash
mkdir hyperledger

cd hyperledger

yarn init

yarn add express nodemon
```

public 디렉토리 생성 및 index 페이지 작성

```html
# public/index.html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.3/react.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.3/react-dom.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-router/1.0.2/ReactRouter.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <link rel="stylesheet" type="text/css" href="index.css" />
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel" src="index.jsx" />
  </body>
</html>
```

```jsx
// public/index.jsx

var { Component } = React;
var { Router, Route, IndexRoute, Link } = ReactRouter;

class Main extends Component {
  render() {
    return (
      <div>
        <h1>Hyperledger Fabric Study</h1>
        <ul className="header">
          <li>
            <Link exact to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/basic">BasicNetwork</Link>
          </li>
          <li>
            <Link to="/first">FirstNetwork</Link>
          </li>
        </ul>
        <div className="content">{this.props.children}</div>
      </div>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <div>
        <h2>HELLO</h2>
        <p>
          안녕하세요? 하이퍼레저에 접속하는 노드 웹 예제입니다. 잘해보죠~!!!
        </p>
      </div>
    );
  }
}
class BasicNetwork extends Component {
  basic_network = () => {
    axios
      .get("/basic_network")
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };
  send = () => {
    alert(this.amount.value);
    axios
      .post("/basic_network", { amount: this.amount.value })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <h2>BasicNetwork</h2>
        <p>
          <button onClick={this.basic_network}>연결</button>
        </p>
        <br />
        <div>
          a가 b에게{" "}
          <input placeholder="송금량" ref={ref => (this.amount = ref)} />
          원을 <button onClick={this.send}> 보내기</button>
          <br />
        </div>
      </div>
    );
  }
}
class FirstNetwork extends Component {
  render() {
    return (
      <div>
        <h2>FirstNetwork에 연결 해보세요</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Router>
    <Route path="/" component={Main}>
      <Route path="basic" component={BasicNetwork} />
      <Route path="first" component={FirstNetwork} />
      <IndexRoute component={Home} />
    </Route>
  </Router>,
  document.getElementById("root")
);
```

```css
/* public/index.css */

body {
  background-color: #ffcc00;
  padding: 20px;
  margin: 0;
}
h1,
h2,
p,
ul,
li {
  font-family: sans-serif;
}
ul.header li {
  display: inline;
  list-style-type: none;
  margin: 0;
}
ul.header {
  background-color: #111;
  padding: 0;
}
ul.header li a {
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  padding: 20px;
  display: inline-block;
}
.content {
  background-color: #fff;
  padding: 20px;
}
.content h2 {
  padding: 0;
  margin: 0;
}
.content li {
  margin-bottom: 10px;
}
a:hover {
  background-color: #0099ff;
}
```

```js
// server.js

const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "/public")));

app.use(express.json());
const basic_network_router = require("./routes/basic_network_router");
app.use("/basic_network", basic_network_router);

app.listen(3000, function() {
  console.log("3000 server ready...");
});
```

```js
// routes/basic_network_router.js

const express = require("express");
const router = express.Router();

/* GET */
router.get("/", function(req, res, next) {
  res.json({ msg: "ok" });
});

module.exports = router;
```

package.json에 스크립트 항목 추가

```json
"scripts": {
    "start": "nodemon server.js"
}
```

```bash
yarn start
```

## hyperledger basic-network 가동

```bash
# 도커 설치
sudo apt install docker.io
docker -v

sudo apt install docker-compose
docker-compose -v

# golang 설치
sudo apt install golang-go
go version
go env

# 환경 변수 설정
vim .bashrc

# .bashrc에 아래 코드 삽입
export GOPATH="/home/ubuntu/go"
export GOROOT="/usr/lib/go-1.10"

# 적용
source .bashrc

# 확인
env | grep GO


```

```bash
mkdir HLF

cd HLF

# 하이퍼레저 패브릭을 설치, 2019/8/21 1.4.2 버전 설치됨,🡺2019/8/31에 1.4.3버전 설치됨). -s 뒤에 버전을 주면 해당 버전이 설치됨
curl -sSL http://bit.ly/2ysbOFE | sudo bash -s

cd fabric-samples/basic-network

# start.sh 수정 line 15번째를 아래와 같이 수정
docker-compose -f docker-compose.yml up -d ca.example.com orderer.example.com peer0.org1.example.com couchdb cli
```

start.sh를 아래와 같이 수정

```bash
#!/bin/bash
#
# Copyright IBM Corp All Rights Reserved
#
# SPDX-License-Identifier: Apache-2.0
#
# Exit on first error, print all commands.
set -ev

# don't rewrite paths for Windows Git Bash users
export MSYS_NO_PATHCONV=1

sudo docker-compose -f docker-compose.yml down

sudo docker-compose -f docker-compose.yml up -d ca.example.com orderer.example.com peer0.org1.example.com couchdb cli
sudo docker ps -a

# wait for Hyperledger Fabric to start
# incase of errors when running later commands, issue export FABRIC_START_TIMEOUT=<larger number>
export FABRIC_START_TIMEOUT=10
#echo ${FABRIC_START_TIMEOUT}
sleep ${FABRIC_START_TIMEOUT}

# Create the channel
sudo docker exec -e "CORE_PEER_LOCALMSPID=Org1MSP" -e "CORE_PEER_MSPCONFIGPATH=/etc/hyperledger/msp/users/Admin@org1.example.com/msp" peer0.org1.example.com peer channel create -o orderer.example.com:7050 -c mychannel -f /etc/hyperledger/configtx/channel.tx
# Join peer0.org1.example.com to the channel.
sudo docker exec -e "CORE_PEER_LOCALMSPID=Org1MSP" -e "CORE_PEER_MSPCONFIGPATH=/etc/hyperledger/msp/users/Admin@org1.example.com/msp" peer0.org1.example.com peer channel join -b mychannel.block
```

```bash
# 실행
./start.sh
```

## orderer를 통한 제네시스 블록 확인

컨테이너 볼륨 설정 되어 있는 것을 확인하여 경로를 찾아 들어가보자

```bash
cd ..

# chaincode 디렉토리는 cli 컨테이너 노드와 동기화 되어있다.
cd chaincode

# peer 컨테이너에 접속
sudo docker exec -it peer0.org1.example.com bash

# 제네시스 블록 확인
cd /var/hyperledger/production/ledgersData/chains/chains/mychanne
l

# jes.1.0 체인코드를 볼 수 있다.
cd /var/hyperledger/production/chaincodes/
```

```bash
# cli 컨테이너에 접속해보자
sudo docker exec -it cli bash

peer chaincode install -n jes -v 1.0 -p github.com/sacc

# a에 10을 저장. instantiate를 실행해야 오더러가 인식한다.
peer chaincode instantiate -n jes -v 1.0 -c '{"Args":["a","10"]}' -C mychannel

# a에 10이라고 저장했으므로 a값을 물어보면 10이라고 나온다.
peer chaincode query -n jes -c '{"Args":["get","a"]}' -C mychannel

# a 값을 20으로 변경
peer chaincode invoke -n jes -c '{"Args":["set","a","20"]}' -C mychannel

# 2019-09-16 06:41:16.391 UTC [chaincodeCmd] InitCmdFactory -> INFO 001 Retrieved channel (mychannel) orderer endpoint: orderer.example.com:7050
# 2019-09-16 06:41:16.398 UTC [chaincodeCmd] chaincodeInvokeOrQuery -> INFO 002 Chaincode invoke successful. result: status:200 payload:"20"

# a를 20으로 변경했기 때문에 a 값을 get 하면 20을 출력한다.
peer chaincode query -n jes -c '{"Args":["get","a"]}' -C mychannel


```

```bash
# vmware가 아닌 로컬환경 브라우저에서 vmware ip로 접속하면 db를 볼 수 있다.
http://192.168.44.152:5984/_utils/

# mychannel_jes > a 에 가보면 값이 저장되어 있다.
```

## basic network + chaincode_example02_node + Node.js WEB + 기본 송금 UI

### node로 체인 코드 개발해 보기

```bash
# 아래 디렉토리에 가면 node로 짜여진 체인코드가 등록되어 있다.
cd HLF/fabric-samples/chaincode/chaincode_example02
```

```bash
# cli 컨테이너에 접속
sudo docker exec -it cli bash

# 체인코드를 kkh로 저장
peer chaincode install -n kkh -v 1.0 -l node -p /opt/gopath/src/github.com/chaincode_example02/node/



```

```bash
sudo docker exec -it peer0.org1.example.com bash

# kkh 체인코드가 설치된 것을 볼 수 있다.
cd /var/hyperledger/production/chaincodes
```

```bash
# 다시 cli 컨테이너로 돌아와서 mychannel에 연결되도록 명령한다.
peer chaincode instantiate -C mychannel -n kkh -l node -v 1.0 -c '{"Args":["init","a","100","b","200"]}'

# 카우치db를 보면 db 항목이 추가된 것을 볼 수 있다.
```

```bash
# 쿼리 날려보기
# cli 컨테이너
# query a 데이터에 대해 날리면 100값을 반환한다.
peer chaincode query -C mychannel -n kkh -c '{"Args":["query","a"]}'

# chaincode에 invoke하기. a가 b에게 10을 전송하라
peer chaincode invoke -C mychannel -n kkh -c '{"Args":["invoke","a","b","10"]}'

# query 다시 날려 a를 조회하면 90을 반환한다.
peer chaincode query -C mychannel -n kkh -c '{"Args":["query","a"]}'


```

```bash
# ~/HLF/fabric-samples/basic-network
# 인증 관련 설정
vim crypto-config.yaml

# 네트워크 구성 관련 파일
vim configtx.yaml




```

### 체인 코드 업그레이드 하기

```bash
# chaincode_example02/node/chaincode_example02.js 파일 수정
# invoke 메소드를 send 메소드로 변경

# cli 컨테이너에서 진행
peer chaincode install -n kkh -v 1.1 -l node -p /opt/gopath/src/github.com/chaincode_example02/node/

peer chaincode upgrade -C mychannel -n kkh -l node -v 1.1 -c '{"Args":["init","a","100","b","0"]}'

# send 메소드를 사용하여 송금
peer chaincode invoke -C mychannel -n kkh -c '{"Args":["send","a","b","10"]}'

peer chaincode query -C mychannel -n kkh -c '{"Args":["query","a"]}'

```
