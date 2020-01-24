# 몽구스

<https://www.zerocho.com/category/MongoDB/post/59a1870210b942001853e250>

## 사진 삭제 후 앨범 및 소셜 목록에서 제외

```js
// 사진 삭제 후 실행 hooks
MomentSchema.post('remove', function(result) {
  console.log('삭제', result);
  // 1. 앨범에서 찾아서 배열에서 삭제
  // 2. 소셜에서 찾아서 배열에서 삭제
});
```

### 사용 최적화

<https://a1p4ca.netlify.com/2018/09/10/mongoose%EC%9D%98-%EC%98%AC%EB%B0%94%EB%A5%B8-%EC%82%AC%EC%9A%A9-%EA%B0%80%EC%9D%B4%EB%93%9C-1-validator-middleware-%EA%B7%B8%EB%A6%AC%EA%B3%A0-query/>

### 검증

```js
schema.pre('update', function(next) {
  const password = this.getUpdate().$set.password;
  if (!password) {
    return next();
  }
  try {
    const salt = Bcrypt.genSaltSync();
    const hash = Bcrypt.hashSync(password, salt);
    this.getUpdate().$set.password = hash;
    next();
  } catch (error) {
    return next(error);
  }
});
```
