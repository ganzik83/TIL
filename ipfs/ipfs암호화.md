# ipfs 암호화 하여 파일 공유하기

퍼블릭 블록체인에는 모든 데이터를 저장 하기 힘들다.
따라서 간단한 텍스트 형태만 기록한다. 이를 보완하기 위해서 ipfs를 이용하고 해쉬값만 올리게 되면 위변조 불가능한 대용량 데이터를 블록에 기록 할 수 있게 된다. 또한 비대칭 암호화(PGP)로 ipfs에 보안 기능을 추가 할 수 있다.

실습을 위해 2개의 컴퓨터를 이용하자

## 1. GPG 설치

macOS

```sh
brew install gnupg

# 키 생성
gpg --export --armor ganzik83@gmail.com > ganzik83.asc
```

리눅스 - 도커

```sh
# 도커 설치하고 우분투 이미지 실행
docker run ubuntu:18.04

docker run --rm -it ubuntu:18.04 /bin/bash

# 도커 진입 후
apt-get install gpg

# 키 생성
gpg --export --armor ganzik83@gmail.com > ganzik83.asc

# 도커에서 생성한 키를 복사
docker cp ubuntu:/root/dockerganzik83.asc dockerganzik83.asc
```

## 2. IPFS 설치

## 3. 공개키로 파일 암호화

## 4. IPFS에 암호화된 파일 업로드

## 5. 다른 컴퓨터에서 파일 다운로드 후 복호화
