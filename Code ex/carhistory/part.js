// exports 전역 객체에 변수 part를 담아서 사용할 수 있다.
exports.c = 'c';
var funcC = () => {
    console.log('this is funcC')
}

// exports.part = {
//     a: 'a',
//     b: 'b'
// };


// exports.a = 'abc';

// exports.func = {
//     funca: function () {
//         console.log('funca');
//     }
// }

// module.exports = (app) => {
//     console.log('파트 부분입니다')

//     app.use((req, res, nex) => {
//         console.log('파트 미들웨어');
//         runInNewContext()
//     });

//     app.get('/moduletest', (req, res) => {
//         console.log('파트 테스트');
//         res.send('파트 테스트');
//     })
// }