# web3

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <script src="https://cdn.jsdelivr.net/gh/ethereum/web3.js@0.20.6/dist/web3.js"></script>
  </head>
  <body>
    <script>
      // https://github.com/ethereum/wiki/wiki/JavaScript-API
      // 프라이빗 testnet의 geth에 접속
      var Web3 = require("web3");
      web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

      // 접속 여부를 확인
      console.log(web3.isConnected());

      // 동기 방식으로 10번째 블록 정보를 조회해서 콘솔 출력
      console.log("#1");
      console.log(web3.eth.getBlock(10));
      console.log("#2");
      // 비동기 방식으로 10번째 블록 정보를 조회해서 콘솔에 출력
      console.log("#3");
      web3.eth.getBlock(10, function(error, result) {
        if (!error) {
          console.log("#4");
          console.log(result);
        } else {
          console.error(error);
        }
        console.log("#5");
      });
      console.log("#6");

      // 화폐 단위 변경
      // 100000000000000000wei를 ether로 변환하기
      console.log(web3.fromWei(1000000000000000000, "ether") + " ether");

      // 1ether를 wei로 변환
      console.log(web3.toWei(1, "ether") + " wei");

      // 동기 방식으로 gas 가격을 조회하여 출력
      let gasPrice = web3.eth.gasPrice;
      console.log(`동기 방식의 가스 가격은 ${gasPrice} wei 입니다.`);

      // 비동기 방식으로 gas 가격을 조회하여 출력
      web3.eth.getGasPrice(function(error, result) {
        if (!error) {
          console.log(`비동기 방식의 가스 가격은 ${result} wei 입니다.`);
        } else {
          console.error(error);
        }
      });

      // 계정 목록을 조회해서 콘솔 출력
      console.log(web3.eth.accounts);

      // 첫번째 계정의 잔액을 조회해서 콘솔 출력
      const account = web3.eth.accounts[0];
      const balance = web3.eth.getBalance(account);
      console.log(
        account +
          " 계정의 잔액은 " +
          web3.fromWei(balance, "ether") +
          "ETH 입니다"
      );

      // 모든 계정의 잔액을 출력
      const accountList = web3.eth.accounts;
      for (let i = 0; i < accountList.length; i++) {
        const accountBalance = web3.eth.getBalance(accountList[i]);
        console.log(
          accountList[i] +
            " 계정의 잔액은 " +
            web3.fromWei(accountBalance, "ether") +
            "ETH 입니다"
        );
      }

      // forEach 사용
      accountList.forEach(function(account) {
        const accountBalance = web3.eth.getBalance(account);
        console.log(
          account +
            " 계정의 잔액은 " +
            web3.fromWei(accountBalance, "ether") +
            "ETH 입니다"
        );
      });

      // accounts[0]에서 accounts[1]로 10ether 비동기 방식으로 송금하기
      const account0 = web3.eth.accounts[0];
      const account1 = web3.eth.accounts[1];
      // 계정 잠금 해제 후 진행
      if (web3.personal.unlockAccount(account0, "pass0")) {
        web3.eth.sendTransaction(
          {
            from: account0,
            to: account1,
            value: web3.toWei(10, "ether")
          },
          function(error, result) {
            if (!error) {
              console.log(`txid = ${result}`);
            } else {
              console.error(error);
            }
          }
        );
      }

      // 블록의 변화를 감지해서 계정별 잔액을 출력. 최신블록을 감지(새 블록이 만들어지면 이벤트 실행)
      web3.eth.filter("latest").watch(function() {
        const balance0 = web3.eth.getBalance(account0);
        const balance1 = web3.eth.getBalance(account1);

        console.log(`accounts0 = ${balance0}`);
        console.log(`accounts1 = ${balance1}`);
      });
    </script>
  </body>
</html>
```
