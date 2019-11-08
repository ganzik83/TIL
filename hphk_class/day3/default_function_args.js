// ES5
function makeRequest(url, method) {}

// ES6
function makeRequest2(method = 'GET') {
  console.log(method);
}
makeRequest2('POST');

const sum = (a = 1, b = 1) => a + b;
console.log(sum());
