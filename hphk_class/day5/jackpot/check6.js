const get6 = require('./get6');
const randomNumbers = require('./pick6');

get6(884).then(data => {
  console.log(data);
  console.log(randomNumbers);
  // 실습 . 두 값을 비교하여 당첨 순위를 나타내기
});
