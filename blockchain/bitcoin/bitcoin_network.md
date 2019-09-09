# 비트코인 네트워크 실습

실습 환경 예시
![bit](https://user-images.githubusercontent.com/14961047/64320898-6e406b80-cffa-11e9-91f4-1ac86a62376a.png)

## 1. Docker 설치

```bash
# 패키지 리스트가 최신인지 확인
sudo apt-get update

# 최신 패키지로 다운
sudo apt-get upgrade

# 도커 설치
sudo apt-get install docker.io

docker -v
```

## 2. 비트코인 네트워크 이미지 받아서 실행하기

```bash
sudo docker pull pjt3591oo/bitcoin:0.17.01

sudo docker images

mkdir testbit

cd testbit



# 컨테이너 실행 및 접속
sudo docker run -it --name jes_bit -p 3000:3000  -v $(pwd):/bitcoin/0jes pjt3591oo/bitcoin:0.17.01 bash

cd ~

ls # start.sh 파일 확인

~/start.sh
```

비트코인 네트워크가 구동되는 것을 확인 할 수 있다.

## 3.

```bash
# 터미널을 새로 열어 컨테이너에 접속한다
sudo docker exec -it jes_bit bash

cd ~

cd .bitcoin

ll

mkdir node1

```

## 4.

```bash
# 개인용 비트코인 네트워크가 가동

cd ~

bitcoind -regtest -rpcuser=test -rpcpassword=test -server -rpcport=12345 -datadir="$PWD/node1" -deprecatedrpc=accounts
```

## 5. bitcoin-cli 실행

```bash
#네트워크에 접속하여 새 acc1이라는 이름의 새 계정을 만듦
bitcoin-cli -regtest -rpcuser=test -rpcpassword=test -rpcconnect="127.0.0.1" -rpcport=12345 -datadir="$PWD/node1" getnewaddress acc1

#네트워크에 접속하여 새 acc2이라는 이름의 새 계정을 만듦
bitcoin-cli -regtest -rpcuser=test -rpcpassword=test -rpcconnect="127.0.0.1" -rpcport=12345  -datadir="$PWD/node1" getnewaddress acc2

# 생성된 계좌 확인
bitcoin-cli -regtest -rpcuser=test -rpcpassword=test -rpcconnect="127.0.0.1" -rpcport=12345   -datadir="$PWD/node1"  listaccounts

# 101개 블록 생성
bitcoin-cli -regtest -rpcuser=test -rpcpassword=test -rpcconnect="127.0.0.1" -rpcport=12345   -datadir="$PWD/node1" generate 101

# 확인
bitcoin-cli -regtest -rpcuser=test -rpcpassword=test -rpcconnect="127.0.0.1" -rpcport=12345  -datadir="$PWD/node1"  listaccounts

# 블록 개수 확인
bitcoin-cli -regtest -rpcuser=test -rpcpassword=test -rpcconnect="127.0.0.1" -rpcport=12345  -datadir="$PWD/node1" getblockcount

# 생성된 블록의 내용 보기
bitcoin-cli -regtest -rpcuser=test -rpcpassword=test -rpcconnect="127.0.0.1" -rpcport=12345  -datadir="$PWD/node1" getblock [block id]

# acc1 이라는 라벨이 붙은 계정의 주소 찾기
bitcoin-cli -regtest -rpcuser=test -rpcpassword=test -rpcconnect="127.0.0.1" -rpcport=12345  -datadir="$PWD/node1" getaccountaddress acc1

# acc1에 10btc 전송하기
bitcoin-cli -regtest -rpcuser=test -rpcpassword=test -rpcconnect="127.0.0.1" -rpcport=12345  -datadir="$PWD/node1" sendtoaddress [acc1 block id] 10

# 블록 생성
bitcoin-cli -regtest -rpcuser=test -rpcpassword=test -rpcconnect="127.0.0.1" -rpcport=12345  -datadir="$PWD/node1"  generate  1

# 계정 확인
bitcoin-cli -regtest -rpcuser=test -rpcpassword=test -rpcconnect="127.0.0.1"  -rpcport=12345  -datadir="$PWD/node1"  listaccounts

#
bitcoin-cli -regtest -rpcuser=test -rpcpassword=test -rpcconnect="127.0.0.1" -rpcport=12345  -datadir="$PWD/node1"  listunspent

# 밸런스 조회
bitcoin-cli -regtest -rpcuser=test -rpcpassword=test -rpcconnect="127.0.0.1" -rpcport=12345  -datadir="$PWD/node1"  getbalance

# acc1 밸런스 조회
bitcoin-cli -regtest -rpcuser=test -rpcpassword=test -rpcconnect="127.0.0.1" -rpcport=12345  -datadir="$PWD/node1"  getbalance acc1
```

## bitcoin-cli 명령어 모음

[문서](../docs/bit.docx)

