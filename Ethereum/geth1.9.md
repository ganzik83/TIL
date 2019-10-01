# geth

# 설치

<https://geth.ethereum.org/>

install ubuntu
<https://geth.ethereum.org/install-and-build/Installing-Geth#install-on-ubuntu-via-ppas>

```bash
sudo add-apt-repository -y ppa:ethereum/ethereum

sudo apt-get update
sudo apt-get install ethereum
```

## 버전 확인

```bash
geth version

```

## 데이터 디렉토리 생성

- 송수신하는 블록 데이터와 계정 정보를 저장하는 디렉토리

```bash
mkdir testnet

cd testnet
```

## genesis 블록 생성

```bash
# genesis.json 파일 생성
sudo vim genesis.json
```

```json
// testnet/genesis.json

{
  "config": {
    "chainId": 15,
    "homesteadBlock": 0,
    "eip155Block": 0,
    "eip158Block": 0
  },
  "nonce": "0x0000000000000042",
  "timestamp": "0x00",
  "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "extraData": "0x00",
  "gasLimit": "0x80000000",
  "difficulty": "0x4000",
  "mixHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "coinbase": "0x3333333333333333333333333333333333333333",
  "alloc": {}
}
```

## geth 초기화

- genesis.json 파일 정보를 바탕으로 genesis 블록을 생성

```bash
geth --datadir ~/testnet init ~/testnet/genesis.json
```

![geth 제네시스 블록 생성](./imgs/geth1.png)

![geth 제네시스 블록 생성](./imgs/geth2.png)

## geth 실행

```bash
# console > 자바스크립트 콘솔을 실행
# --networkid > 네트워크에서 해당하는 노드들을 식별하기 위한 아이디
# --nodiscover > 개발 목적으로 프라이빗하게 사용 할 것이다. 외부에서 네트워크를 찾지 못한다.
# --maxpeers > 나와 네트워크 구성 할 피어의 수
geth --datadir ~/testnet console --networkid 4649 --nodiscover --maxpeers 0
```

![geth 구동](./imgs/geth3.png)

ancient 디렉토리 -> 성능 향상을 위해 빠른 스토리지에 데이터를 나눠 저장 할 수 있도록 ssd와 hdd에 디렉토리를 나눌 수 있다. 디폴트값은 chaindata 아래에 생성된다.

Ethash -> asic 장비를 통한 채굴 독점을 막기 위해 DAGs을 사용하기 위해 데이터를 저장하는 디렉토리. 메모리를 일정수준 점유하게끔 만든다.

IPC > inter process call / 상반되는 개념은 RPC

## 데이터 디렉토리 확인

```bash
ubuntu@ubuntu:~/testnet$ tree
.
├── genesis.json
├── geth
│   ├── chaindata
│   │   ├── 000002.ldb
│   │   ├── 000003.log
│   │   ├── ancient # ssd와 같은 빠른 처리 디스크로 지정할 수 있다.
│   │   │   ├── bodies.0000.cdat
│   │   │   ├── bodies.cidx
│   │   │   ├── diffs.0000.rdat
│   │   │   ├── diffs.ridx
│   │   │   ├── FLOCK
│   │   │   ├── hashes.0000.rdat
│   │   │   ├── hashes.ridx
│   │   │   ├── headers.0000.cdat
│   │   │   ├── headers.cidx
│   │   │   ├── receipts.0000.cdat
│   │   │   └── receipts.cidx
│   │   ├── CURRENT
│   │   ├── CURRENT.bak
│   │   ├── LOCK
│   │   ├── LOG
│   │   └── MANIFEST-000004
│   ├── lightchaindata
│   │   ├── 000001.log
│   │   ├── CURRENT
│   │   ├── LOCK
│   │   ├── LOG
│   │   └── MANIFEST-000000
│   ├── LOCK
│   ├── nodekey
│   ├── nodes
│   │   ├── 000001.log
│   │   ├── CURRENT
│   │   ├── LOCK
│   │   ├── LOG
│   │   └── MANIFEST-000000
│   └── transactions.rlp
├── history # 커멘트 입력된 기록
└── keystore # 계정

6 directories, 33 files
```

## IPC 프로토콜로 연결

```bash
# 터미널 1 (서비스 및 데몬용)
geth --datadir ~/testnet console --networkid 4649 --nodiscover --maxpeers 0

# 터미널 2
geth attach ipc:/home/ubuntu/testnet/geth.ipc
# 지금 실행되고 있는 geth에 IPC로 붙는다.
```

![geth 터미널2](./imgs/geth4.png)

## 사용법 확인

```bash
geth help
```

## 계정 생성

geth console에서 EOA계정을 생성 후 확인

```bash
personal.newAccount('pass0')  # pass0 라는 패스워드를 사용하는 계정을 생성

eth.accounts
```

![geth](./imgs/geth5.png)
![geth](./imgs/geth6.png)

- 개인키가 저장된 파일 위치를 볼 수 있다.

```bash
cd ~/testnet/keystore

cat ./UTC--2019-10-01T08-16-32.585512482Z--99e1ca7be51f304b4d61ebab94569f77b80856f9
```

![geth](./imgs/geth7.png)

```bash
# 계정을 하나 더 생성한다.
personal.newAccount('pass1')

# 생성된 계정 확인
eth.accounts

# 첫번째 계정만 확인
eth.accounts[0]
```

## 콘솔이 아닌 geth 명령으로 계정 생성 및 확인

```bash
geth --datadir ~/testnet account new
```

![geth](./imgs/geth8.png)

```bash
geth --datadir ~/testnet account list
```

![geth](./imgs/geth9.png)

## 계정 잔고 확인

```bash
# coinbase 계정 확인
eth.coinbase # 첫번째 만든 계정

# 두번째 계정을 코인베이스로 설정하기
miner.setEtherbase(eth.accounts[1])

# 두번째 계정이 coinbase로 설정된 것을 알 수 있다.
eth.coinbase

# 다시 첫번째로 coinbase로 설정 (주소를 직접 입력하기)
miner.setEtherbase('0x99e1ca7be51f304b4d61ebab94569f77b80856f9')
```
