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
