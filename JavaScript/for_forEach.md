# for문과 forEach문 비교

```js
//  모든 계정의 잔액을 출력
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

//   forEach 사용
accountList.forEach(function(account) {
  const accountBalance = web3.eth.getBalance(account);
  console.log(
    account +
      " 계정의 잔액은 " +
      web3.fromWei(accountBalance, "ether") +
      "ETH 입니다"
  );
});
```
