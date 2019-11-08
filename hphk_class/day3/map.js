// ES5

const numbers = [1, 2, 3];
const doubleN = [];

for (var i = 0; i < numbers.length; i++) {
  doubleN.push(numbers[i] * 2);
}

// ES6
const doubleN2 = numbers.map(e => e * 2);
console.log(doubleN2);

/* data.map(e=>{
    return <h1>{e}</h1>
})
*/

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

// h
const heights = images.map(e => e.h);
console.log(heights);

// heights는 특정 값을 저장하는 Array
// console.log(heights)

//function object value
function plunk(arr, key) {
  const result = [];
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    result.push(arr[i][key]);
  }
  return result;
}

const result = plunk(images, 'w');
console.log(result);
