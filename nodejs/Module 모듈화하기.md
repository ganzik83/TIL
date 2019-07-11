# 모듈화 하기

1. 객체나 함수를 외부로 내보내려면 exports 요소를 사용한다

server.js

```js
const router = require("./router/test");
console.log(router.a);
console.log(router.b);
console.log(router.c.a);
console.log(router.c.b);

router.func.a();
```

./router/test.js

```js
// exports를 사용하여 a를 전역 변수로 사용 가능하다
exports.a = "this is exports.a";
exports.a = "this is exports.b";
exports.c = { a: "this is router.c.a", b: "this is router.c.b" };

// exports를 활용하여 a의 밸류 값에 함수를 넣고 호출 할 수 있다.
exports.func = {
  a: () => {
    console.log("this is router.func.a()");
  }
};
```

---

2. 변수를 선언하고 `module.exports = 변수;`를 사용한다

server.js

```js
const userRouter = require("./router/user");
app.use("/user", userRouter); // 기본경로를 /user로 지정한다
```

./router/user.js

```js
const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.render("login.ejs", {
    fmsg: req.flash("fmsg")
  });
});

module.exports = router;
```
