// ES5
const computers = [
  { name: 'macbook', ram: 8 },
  { name: 'imac', ram: 64 },
  { name: 'surfacebook', ram: 16 },
  { name: 'x1carbon', ram: 8 }
];

let everyComputer = true;
let someComputer = false;

for (var i = 0; i < computers.length; i++) {
  console.log(computers[i]);
  const computer = computers[i];
  if (computer.ram < 10) {
    everyComputer = false;
    break;
  }

  if (computer.ram > 10) {
    someComputer = true;
    break;
  }
}

// ES6

everyComputer = computers.every(computer => computer.ram < 10);
someComputer = computers.some(computer => computer.ram > 10);

// console.log(everyComputer);
// console.log(someComputer);

const users = [
  { id: 1, submit: true },
  { id: 2, submit: true },
  { id: 3, submit: true },
  { id: 4, submit: false }
];

// every 모두가 submit 했는지
const everySubmit = users.every(user => user.submit);
const someSubmit = users.some(user => user.submit);

// console.log(everySubmit);
// console.log(someSubmit);

function mySome(arr, callback) {
  let result = false;
  arr.forEach(el => {
    if (callback(el)) result = true;
  });
  return result;
}

console.log(mySome(users, e => e.submit));

function mySome2(arr, callback) {
  return !arr.every(e => !callback(e));
}

console.log(mySome2(users, e => e.submit));
