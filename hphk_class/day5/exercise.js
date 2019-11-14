const customers = [
  { id: 1, name: 'kihong', isGold: true, email: 'ganzik83@gmail.com' },
  { id: 2, name: 'yujun', isGold: true, email: 'yujun@gmail.com' },
  { id: 3, name: 'goeun', isGold: false, email: 'satang8888@gmail.com' }
];

// 1. customer를 찾고
function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const customer = customers.find(customer => customer.id === id);
      if (customer) resolve(customer);
      else reject(new Error('일치하는 사용자가 없습니다'));
    }, 2000);
  });
}

// 2. gold회원인지 확인하고
function getGold(isGold) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isGold === true) resolve(true);
      else reject(new Error('골드 회원이 아닙니다'));
    });
  }, 2000);
}

// 3. 맞으면 email을 console에 출력
function sendEmail(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('send email...');
    });
  }, 2000);
  // console.log(email)
}

// (익명함수)() 단 1번 실행된다.

(async function() {
  const customer = await getCustomer(1);
  const isGold = await getGold(customer.isGold);
  if (isGold) await sendEmail();
})();
