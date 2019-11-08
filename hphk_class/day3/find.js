// ES5

const users = [
  {
    name: 'kihong',
    age: 37
  },
  {
    name: 'ironMan',
    age: 29
  },
  {
    name: 'superMan',
    age: 3450
  },
  {
    name: 'hulk',
    age: 287
  }
];

// 특정한 사람 찾기

let user = null;

for (var i = 0; i < users.length; i++) {
  if (users[i].name === 'ironMan') {
    user = users[i];
    break;
  }
}

console.log(user);

// ES6

const user2 = users.find(user => {
  console.log(user.name === 'hulk');
  return user.name === 'hulk';
});

console.log(user2);

const products = [
  { name: '사과', type: '과일' },
  { name: '오이', type: '채소' },
  { name: '당근', type: '채소' },
  { name: '기홍', type: '사람' }
];

const result = products.find(el => el.name === '기홍');
console.log(result);
