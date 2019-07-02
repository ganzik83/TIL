var test = "Hello";

console.log("hello node");
console.log(1 + 1);
console.log(test);


// 비동기 프로그램 예제
console.log('Async Programming');
// 2초 뒤에 실행
setTimeout(function () {
    console.log('Hello Async');
}, 2000);
console.log('Done');