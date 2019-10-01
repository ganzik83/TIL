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
