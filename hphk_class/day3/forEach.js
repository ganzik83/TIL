// ES5

const colors = ['red', 'blue', 'green'];
// const colors = 2;

// for (i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// // ES6
// colors.forEach(color => {
//   console.log(color);
// });

// forEach2 함수를 직접 만들어 보자
function forEach2(el, callback) {
  // 만약 입력받은 el 인자값이 배열이 아니면 에러를 던진다
  if (!Array.isArray(el)) throw new Error('배열이 아닙니다');

  for (let i = 0; i < el.length; i++) {
    callback(el[i]);
  }
}

forEach2(colors, e => console.log(e));

const images = [
  {
    h: 5,
    w: 5
  },
  {
    h: 15,
    w: 15
  },
  {
    h: 25,
    w: 25
  }
];

const area = [];

// forEach문을 사용해서 w x h 를 계산해서 area에 저장해주세요

images.forEach(image => {
  const result = image.h * image.w;
  area.push(result);
});
console.log(area);
