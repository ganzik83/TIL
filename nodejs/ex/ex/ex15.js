const condition = true; // true면 resolve, false면 reject

/*
 new Promise로 프로미스를 생성. resolve와 reject를 매개변수로 갖는 콜백 함수를 넣는다. 이렇게 만든 promise 변수에 then과 catch메소드를 붙일 수 있다. resolve가 호출되면 then이 실행되고, reject가 호출되면 catch가 실행된다. 
*/
const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('성공');
    } else {
        reject('실패');
    }
})

promise.then((message) => {
        console.log(message); // 성공(resolve)한 경우 실행
    })
    .catch((err) => {
        console.error(err); // 실피(reject)한 경우 실행
    })