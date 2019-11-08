// ES5

const products = [
  { name: '사과', type: '과일' },
  { name: '오이', type: '채소' },
  { name: '당근', type: '채소' },
  { name: '기홍', type: '사람' }
];

const fruits = [];
for (var i = 0; i < products.length; i++) {
  if (products[i].type === '과일') {
    fruits.push(products[i]);
  }
}
console.log(fruits);

// ES6
const human = products.filter(el => {
  return el.type === '사람';
});

console.log(human);

// 실습 filter를 이용하여 3 < e < 7
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const targetN = numbers.filter(number => (number > 3) & (number < 7)); // true, false를 확인하여 true 값을 배열에 담는다.
console.log(targetN);

function myReject(arr, callback) {
  const result = [];
  arr.forEach(element => {
    if (callback(element)) result.push(element);
  });
  return result;
}

function myReject2(arr, callback) {
  return arr.filter(e => callback(e));
}

myReject(numbers, number => number > 3);
myReject2(numbers, number => number > 3);
