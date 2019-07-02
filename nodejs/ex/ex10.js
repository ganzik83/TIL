var o = {
    p: 42,
    q: true
};
var {
    p,
    q
} = o;

console.log(p); // 42
console.log(q); // true

var a, b;

({
    a,
    b
} = {
    a: 1,
    b: 2
});
console.log(a);
console.log(b);