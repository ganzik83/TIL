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
