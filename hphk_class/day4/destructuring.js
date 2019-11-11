// ES5
const computer = {
  model: 'mac',
  year: 2019,
  price: 300
};

// const model = computer.model;
// const year = computer.year;
// const price = computer.price;

// ES6
const { model, year, price } = computer;

console.log(model, year, price);

const labtops = [
  {
    model: 'gram',
    year: 2018,
    price: 100
  },
  {
    model: 'x1c',
    year: 2019,
    price: 150
  }
];

// ES5
const result1 = labtops.map(el => {
  return `<h1>${el.model}</h1>`;
});

// ES6
const result2 = labtops.map(({ model }) => {
  return `<h1>${model}</h1>`;
});

console.log(result1);
console.log(result2);
