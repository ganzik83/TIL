# 노드 자바스크립트

- 클라이언트가 아닌 서버에서 스크립트 코드가 실행
- 브라우저에서 실행되는 것이 아니기 때문에 BOM 객체가 제공되지 않음(window, navigator, screen, document 등)
- 대신 global 객체, 내장 모듈 및 확장 모듈 이용 가능

## 노드 JavaScript 기본 문법

### 변수 선언 및 대입

```js
// 변수 선언
var name = "홍길동";
var age = 30;

console.log(name);
console.log(age);
```

### 객체 선언 및 대입

```js
// 객체 선언
var User = {};
User["age"] = 20;
User["name"] = "심청이";
User.phoneNumber = "010-1234-5678";

//객체 사용
console.log("이름 : %s", User.name);
console.log("나이 : %n", User.age);
console.log("전화번호 : %s", User.phoneNumber);
```

### 함수

![자바스크립트와 자바의 함수 비교](./imgs/nodefunc.png)
익명함수

- 이름 없는 함수
- 함수가 변수에 대입되거나, 다른 함수의 인자로 쓰이는 경우 자기 이름이 없는 익명 함수로 정의해서 사용 가능

```js
function(){

};
```

![자바스크립트와 자바의 함수 비교](./imgs/nodefunc1.png)

```js
function add(a, b) {
  return a + b;
}

var result = add(10, 10);
console.log("더하기 (10, 10) : %d", result);

// 익명 함수를 변수에 집어 넣는다
var subtract = function(a, b) {
  return a - b;
};

console.log(result);
console.log("");
// 변수 이름으로 함수를 실행 시킬 수 있다
console.log(subtract(10, 10));
```

### 콜백 함수

```js
function add(a, b, callback) {
  var result = a + b;
  callback(result);
}

add(10, 20, function(result) {
  console.log("콜백함수 호출됨");
  console.log("result = " + result);
});
```

```js
function add(a, b, callback) {
  var result = a + b;
  callback(result);
}

function callback2(result) {
  console.log("콜백함수 호출됨");
  console.log("result = " + result);
}

add(10, 20, callback2);
```

강사용

```js
function add(a, b, callback) {
   console.log("--> add함수");
   var result = a + b;
   for(let i=0; i<1000000; i++) {
       for(let j=0; j<1000; j++) {

       };


   callback(result);
   console.log("<-- add함수");
}

console.log('--> add함수 호출');
add(10, 20, function(result) {
   console.log('--> callback() ');
   console.log('result = ' + result);
   console.log('<-- callback');
});
console.log('<-- add함수 호출');
```
