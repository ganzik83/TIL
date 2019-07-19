const obj = {
    outside: {
        inside: {
            key: 'value',
        },
    },
};

console.dir(obj);
console.dir(obj, {
    colors: false,
    depth: 2
});
console.dir(obj, {
    colors: true,
    depth: 1
});