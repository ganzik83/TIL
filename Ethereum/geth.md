# geth 실습

## 설치

<https://geth.ethereum.org/downloads/>

다운받은 설치 파일을 user 폴더의 /geth 폴더를 설치하고 옮긴다.

환경변수 설정을 한다.

```bash
# vim .bash_profile에 아래 코드를 삽입

PATH=$PATH:/Users/kimkihong/geth

# geth 유닉스 실행 파일 위치 확인
which geth
```

## 사설망에서 Geth 실행하기

/geth/private_net 디렉토리에 genesis.json을 작성한다

```json
// genesis.json
{
  "config": {
    "chainId": 33,
    "homesteadBlock": 0,
    "eip155Block": 0,
    "eip158Block": 0
  },

  "nonce": "0x0000000000000033",
  "timestamp": "0x0",
  "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "gasLimit": "0x8000000",
  "difficulty": "0x100",
  "mixhash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "coinbase": "0x3333333333333333333333333333333333333333",
  "alloc": {}
}
```

```bash
geth --datadir ~/geth/private_net/ init ~/geth/private_net/genesis.json
```

```bash
geth --networkid "10" --nodiscover --datadir ~/geth/private_net --rpc --rpcaddr "localhost" --rpcport "8545" --rpccorsdomain "*" --rpcapi "eth, net, web3, personal" --targetgaslimit "20000000" console 2>> ~/geth/private_net/error.log
```

아래와 같이 접속된다.

```bash
Welcome to the Geth JavaScript console!

instance: Geth/v1.9.3-stable-cfbb969d/darwin-amd64/go1.12.9
at block: 0 (Thu, 01 Jan 1970 09:00:00 KST)
 datadir: /Users/kimkihong/geth/private_net
 modules: admin:1.0 debug:1.0 eth:1.0 ethash:1.0 miner:1.0 net:1.0 personal:1.0 rpc:1.0 txpool:1.0 web3:1.0

>
```

## 실습 진행

### 외부계정 주소 만들기

```bash
personal.newAccount("master")
# "0x1cf8799f38ed55fcd892c2f555e943e50db0e4e2"

personal.newAccount("acc1")
# "0x417b8c4f874606a1f883ff9af312cd6d86de4c32"

personal.newAccount("acc2")
# "0xbc55615155b7772a6f220fc9ccae3921f7a59507"
```

### 외부 계정 주소 확인

```bash
eth.accounts
["0x1cf8799f38ed55fcd892c2f555e943e50db0e4e2", "0x417b8c4f874606a1f883ff9af312cd6d86de4c32", "0xbc55615155b7772a6f220fc9ccae3921f7a59507"] # 배열로 나열

# 인덱스를 지정해서 계정 주소 확인
eth.accounts[0]

```

### coinbase 계정 주소 확인

```bash
eth.coinbase

```

### 코인베이스 계정 주소 변경

```bash
miner.setEtherbase(eth.accounts[1])
#  true


```

## Geth 콘솔 명령

### 블록내용 확인

```bash
eth.getBlock(0)
```

### 채굴 시작

```bash
# miner.start(<스레드 수>)
miner.start(1)  # null 을 출력한다.

# 채굴 확인
eth.mining # true를 출력하면 마이닝이 잘 동작하고 있는 것이다.
```

### 코인베이스 잔액 확인

```bash
eth.getBalance(eth.accounts[0])
# 마스터 계정의 주소의 계정 밸런스가 wei 단위로 출력이 된다.

web3.fromWei(eth.getBalance(eth.accounts[0]), "ether")
# wei 단위를 ether 단위로 변환해서 보여준댜
```

## 송금

```bash
# master 계정에서 acc2 계정으로 5이더 송금하기
eth.sendTransaction({from: eth.accounts[0], to: eth.accounts[2], value: web3.toWei(5, "ether")})

# Error: authentication needed: password or unlock
#     at web3.js:3143:20
#     at web3.js:6347:15
#     at web3.js:5081:36
#     at <anonymous>:1:1

# 계정이 잠금되어 있기 때문에 에러가 발생한다. 송금을 하기 위해서는 계정 잠금을 해제해야 한다.
```

### 계정 잠금 해제

```bash
personal.unlockAccount(eth.accounts[0])
Unlock account 0x1cf8799f38ed55fcd892c2f555e943e50db0e4e2
Password:
# Error: account unlock with HTTP access is forbidden
```

```bash
geth --networkid "10" --nodiscover --datadir ~/geth/private_net --rpc --rpcaddr "localhost" --rpcport "8545" --rpccorsdomain "*" --rpcapi "eth, net, web3, personal" --targetgaslimit "20000000" --allow-insecure-unlock console 2>> ~/geth/private_net/error.log
```

```bash
# 마스터 계정 비밀번호를 풀고 이더를 전송
personal.unlockAccount(eth.accounts[0])
# Unlock account 0x1cf8799f38ed55fcd892c2f555e943e50db0e4e2
# Password:
# true

eth.sendTransaction({from: eth.accounts[0], to: eth.accounts[2], value: web3.toWei(5, "ether")})
#  "0x170902400adee3509bbfaa1c613bf7b4a9bc411f19eb4441421e008841a433b7" # 트랜젝션 번호가 생성된다.
```

### 트랜젝션 확인

```bash
eth.getTransaction("0x170902400adee3509bbfaa1c613bf7b4a9bc411f19eb4441421e008841a433b7")
```

### 채굴을 실행하여 트랜젝션이 확정되도록 하자.

```bash
miner.start(1)

eth.getTransaction("0x170902400adee3509bbfaa1c613bf7b4a9bc411f19eb4441421e008841a433b7")
```

![geth](../imgs/geth.md)

### acc2 의 계정 확인

```bash
web3.fromWei(eth.getBalance(eth.accounts[2]), "ether")
# 5이더가 들어온 것을 볼 수 있다.
```

### acc2의 블록별 이더 소유 확인

```bash
web3.fromWei(eth.getBalance(eth.accounts[2], 383), "ether")
```

### 거래 영수증 확인

```bash
eth.getTransactionReceipt("0x170902400adee3509bbfaa1c613bf7b4a9bc411f19eb4441421e008841a433b7")
```
