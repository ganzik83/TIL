const request = require('request');
// import request from 'request';

function getLottoData(drwNo) {
  const url = `https://www.nlotto.co.kr/common.do?method=getLottoNumber&drwNo=${drwNo}`;

  return new Promise((resolve, reject) => {
    request.get(url, (error, response, body) => {
      // console.log(body);
      const lottoData = JSON.parse(body); // json 형식으로 파싱한다.(기존 body 데이터는 string타입)
      // console.log(lottoData);
      const realNumber = [];
      let bonusNum = 0;
      // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of
      for (const [key, value] of Object.entries(lottoData)) {
        // console.log('-----------------');
        // console.log('key: ', key);
        // console.log('value: ', value);

        if (key.includes('drwt')) {
          realNumber.push(value);
        } else if (key === 'bonusNo') {
          bonusNum = value;
        }
        realNumber.sort((a, b) => b - a);
      }
      // resolve({ bonusNum: bonusNum, realNumber: realNumber }); ES5 문법. 키밸류 페어를 다 적어주어야 한다.
      resolve({ bonusNum, realNumber });
    });
  });
}

// getLottoData(884);
module.exports = getLottoData;
