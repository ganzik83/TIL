function add(a, b, callback) {
    var result = a + b;
    callback(result);
}

add(10, 20, function (result) {
    console.log('콜백함수 호출됨');
    console.log('result = ' + result);
});