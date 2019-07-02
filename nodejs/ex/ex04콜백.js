/* 
function add(a, b, callback) {
    var result = a + b;
    callback(result);
}

add(10, 20, function (result) {
    console.log('콜백함수 호출됨');
    console.log('result = ' + result);
});
*/

function subtraction(a, b, call) {
    var result = a - b;
    call(result);
}

function subprint(d) {
    console.log('뭐지이거');
    console.log(d);
}

subtraction(10, 8, subprint);