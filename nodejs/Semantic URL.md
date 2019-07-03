route.js 파일 작성

```js
module.exports = function(app) {
  // http://localhost:3000/semantic/mybook/123

  app.get("/semantic/:book/:page", function(req, res) {
    var book = req.params.book;
    var page = req.params.page;
    res.send(book + ": " + page);
  });
};
```

params를 이용한다
