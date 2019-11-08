// ES5

const numbers = [1, 2, 3];
let sum = 0;

// for (var i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// console.log(sum);

// ES6

sum = numbers.reduce((acc, number) => {
  //   console.log(acc);
  return acc + number;
}, 0); // 초기값

// console.log(sum);

let multiply = numbers.reduce((acc, number) => {
  //   console.log(acc);
  return acc * number;
}, 1);

// console.log(multiply);

// 문자열도 가능
const stringSet = ['one', 'two', 'three'];

const dNumbers1 = numbers.map(e => e * 2);

const dNumbers2 = numbers.reduce((acc, number) => {
  // console.log(acc);
  acc.push(number * 2);
  return acc;
}, []);
// console.log(dNumbers2);

// 실습
// 알고리즘 : () 검사하는 함수 만들기

// ')(', ')()'
// '()', '(())()'

console.log('hi hi hi hi'.split(''));
function checkParens(str) {
  return str.split('').reduce((acc, char) => {
    if (acc < 0) {
      return acc;
    } else if (char === '(') {
      ++acc;
    } else {
      --acc;
    }
    return acc;
  }, 0);
  // 괄호 검사 로직
  // reduce()사용
}

console.log(checkParens(')('));
console.log(checkParens(')()'));
console.log(checkParens('()'));
console.log(checkParens('(())()'));

const users = [
  { id: 1, type: 'sitting' },
  { id: 2, type: 'sitting' },
  { id: 3, type: 'standing' },
  { id: 4, type: 'sitting' },
  { id: 5, type: 'standing' }
];

const samples = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4];
// reduce를 중복되지않도록 숫자를 배열로 뽑아주세요!

function unique(arr) {
  return arr.reduce((acc, element) => {
    // console.log(acc);
    if (acc.every(e => e != element)) {
      acc.push(element);
    }
    return acc;
  }, []);
}

console.log(unique(samples));
