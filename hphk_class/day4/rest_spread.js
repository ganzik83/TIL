// ES5
const addNumbers = (a, b, c, d, e) => {
  const numbers = [a, b, c, d, e];
  return numbers.reduce((acc, num) => (add += num), 0);
};

// ES6
const addNumbersES6 = (...numbers) => {
  return numbers.reduce((acc, num) => (acc += num), 0);
};

// console.log(addNumbersES6(1, 2, 3, 4, 5));

const defaultColors = ['red', 'blue', 'greaa'];
const addColors = ['orange', 'yellow'];

// ES5
const sumColors = defaultColors.concat(addColors); // concat 배열 뒤쪽에 합친다

// console.log(sumColors);

// ES6
const sumColorsES6 = [...defaultColors, ...addColors];

// console.log(sumColorsES6);

// arguments 예약어를 통해 함수에 인자값을 전달하지 않아도 입력된다.
// arguments는 키 밸류로 들어간다.
// 콘솔에 찍으면 키는 사라지고 array형태로 출력된다
function logging() {
  console.log(arguments);
  console.log(...arguments);
  [a, b, ...rest] = arguments;
  [, , ...rest2] = arguments;
  console.log(rest);
  console.log(rest2);
}

logging(1, 2, 3, 4, 5);
