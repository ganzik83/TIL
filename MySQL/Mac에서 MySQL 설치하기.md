# Mac에서 MySQL 설치하기

## 설치 및 초기 세팅

<https://github.com/helloheesu/SecretlyGreatly/wiki/%EB%A7%A5%EC%97%90%EC%84%9C-mysql-%EC%84%A4%EC%B9%98-%ED%9B%84-%ED%99%98%EA%B2%BD%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0>
<https://0719s.tistory.com/2>

OS X 10.11 에서 mysql 을 설치하는 방법은 다음과 같다.

- OS X 10.9 이상부터는 homebrew를 사용하여 install 해야 한다고 한다.

Homebrew를 최신 버전으로 유지하고, 충돌하는 모듈이 있나 확인한다.

```bash
brew update
brew doctor
brew upgrade
```

Homebrew를 사용하여 mysql 설치

```bash
brew install mysql

# 특정 버전 설치
brew install mysql@5.5
```

Mysql 시작

```bash
mysql.server restart
```

mysql의 보안을 더 강화한다. (root 사용자 암호 초기화 등)

```bash
mysql_secure_installation
```

root 사용자로 접속

```bash
mysql -u root -p
```

mysql 시작

```bash
mysql.server start
```

데몬 실행

```bash
brew services start mysql
```

## MySQL 접속하기

터미널에서 `mysql -u root -p` 을 통해 접속  
특정 호스트에 접속되어 있다면 `mysql --host=<HOST IP> -u root --password="PASSWORD"`을 사용해 접속! (LOAD DATA를 사용할 예정이라 저는 –local-infile=1을 추가해서 사용하는 편입니다

## MySQL 삭제하기

```bash
brew services stop mysql

sudo rm -rf /usr/local/var/mysql
sudo rm -rf /usr/local/bin/mysql
sudo rm -rf /usr/local/Cellar/mysql

brew uninstall mysql
```

서비스 시작

```bash
brew services start mysql
```

참조 짱짱
<https://github.com/appkr/l5code/issues/4>
<https://gmlwjd9405.github.io/2018/12/23/mysql-tips.html>
