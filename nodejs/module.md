# module

# 모듈화의 필요성

하나의 파일에 모든 것을 담을 수는 없음
Javascript에서 하나의 파일은 개별적인 모듈

# 모듈화 방법

exports.a = 10;
module.exports = { a : 10 }

# 초기값을 가지는 모듈화

생성자 함수를 이용, 객체를 리턴
Module.exports = function (a, b) { myobj = { a:a, b:b }; return myobj }

# 라우터 모듈화

express.Router() 이용

var express = require('express');
var router = express.Router();

router.get('/router', function(req,res) {
console.log('/test/router');
res.send('<h1>/test/router</h1>');
});

Module.exports = router;

# 초기값을 가지는 라우터 모듈화

var express = require('express');
var router = express.Router();

module.exports = function () {

router.get('/router', function(req,res) {
console.log('/test/router');
res.send('<h1>/test/router</h1>');
});
return router;
}

# 모듈화 코드 (참고)

1. exports 를 통한 모듈화

```js
exports.a = 10;
exports.b = 20;
exports.funca = function(val) {
  console.log(val);
};

module.exports = {
  a: 10,
  b: 20,
  funca: function(val) {
    console.log(val);
  }
};
```

3. module.exports 확장

```js
let mymodule = {
  a: 10,
  b: 20,
  funca: function(val) {
    console.log(val);
  }
};

module.exports = mymodule;
```

4. 초기값이 있는 모듈 (생성자 패턴)

```js
module.exports = function(param1, param2) {
  let mymodule = {
    a: param1,
    b: param2,
    funca: function(val) {
      console.log(val);
    }
  };
  return mymodule;
};
```

// 5. global 변수 사용

```js
module.exports = function(param1, param2) {
  let mymodule = {
    a: param1,
    b: param2,
    c: myval,
    funca: function(val) {
      console.log(val);
    }
  };
  return mymodule;
};
```
