// ES5

function add(a, b) {
  return a + b;
}

// ES6
const add2 = (a, b) => {
  return a + b;
};

const add3 = (a, b) => a + b;

const squere = a => a * a; // e => func(e.key)

// 배열에 함수를 담을 수 있다
const obj = {
  name: 'kihong',
  sayHi: function() {
    console.log('hi');
  },
  sayHi2() {
    console.log('hi');
  }
};

obj.sayHi();
obj.sayHi2();

console.log(add(1, 2));
console.log(add2(2, 4));
