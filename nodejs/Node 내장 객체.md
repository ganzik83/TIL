# 노드 내장 객체 이용하기

## global 객체 이용

- 브라우저의 window 객체와 비슷한 전역객체
- 모든 js 소스 파일에서 언제든지 접근 가능
- global.console.log(‘~~~’) 이지만 global. 은 생략가능

## global.console

예제

```js
const string = "abc";
const number = 1;
const boolean = true;

console.log("기본로그");
console.log(string, number, boolean);
console.error("에러메시지");
```

### console.dir 객체 출력

```js
const obj = {
  outside: {
    inside: {
      key: "value"
    }
  }
};

console.dir(obj);
console.dir(obj, {
  colors: false,
  depth: 2
});
console.dir(obj, {
  colors: true,
  depth: 1
});
```

### console.log 수행 시간 출력

```js
console.time("시간 측정");
for (let i = 0; i < 10000; i++) {
  continue;
}
console.timeEnd("시간 측정");
```
