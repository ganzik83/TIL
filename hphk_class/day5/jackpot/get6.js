const request = require('request');
// import request from 'request';

function getLottoData(drwNo) {
  const url = `https://www.nlotto.co.kr/common.do?method=getLottoNumber&drwNo=${drwNo}`;

  return new Promise((resolve, reject) => {
    request.get(url, (error, response, body) => {});
  });
}

module.exports = getLottoData;
