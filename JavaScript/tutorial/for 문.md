# for 문

```js
/* 
for (초기값; 조건문; 증감값) {
            반복할 문장;
        }; 
*/
let sum = 0;
for (i = o; i <= 10; i++) {
  sum = sum + i;
}
document.write(sum);
```

for(수식1; 수식2; 수식3;){
반복루프;
}
![javascript for문](./imgs/jsfor.png)

## 실습

1. for문을 이용하여 10에서 25까지 합을 구하시오

```js
let sum = 0;
// i값을 let으로 선언하는 것과 var(전역변수)로 선언하는 것의 차이에 대해 생각해보자
for (let i = 10; i <= 25; i++) {
  console.log(i);
  sum = sum + i;
}
console.log(sum);
document.write(sum);
```

2. for문을 이용하여 10에서 100까지 10, 13, 16 3씩 증가하는 합을 구하시오

```js
let sum = 0;
for (let i = 10; i <= 100; i += 3) {
  console.log(i);
  sum = sum + i;
}
console.log(sum);
document.write(sum);
```
