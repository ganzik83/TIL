function foo() {
  console.log('foo');
}

function hoo() {
  console.log('hoo');
}

function ha() {
  hoo();
  console.log('ha');
}

console.log('start');
ha();
console.log('end');
