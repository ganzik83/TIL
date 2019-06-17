# 도커 컨테이너에 OpenSSH 서버 구축하기

```bash
# 도커 컨테이너에 ubuntu 16.04 띄우기
sudo docker run -it ubuntu:16.04
```

```bash
apt-get update
```

![docker ssh](./imgs/dockerssh.png)

```bash
apt-get install net-tools
```

![docker ssh](./imgs/dockerssh5.png)

```bash
apt-get install -y openssh-server
```

![docker ssh](./imgs/dockerssh1.png)

```bash
service ssh restart
```

![docker ssh](./imgs/dockerssh2.png)

### ssh 서버 동작 확인

```bash
ps -aux | grep ssh
```

![docker ssh](./imgs/dockerssh3.png)

### 유저 추가

```bash
adduser sshuser
```

![docker ssh](./imgs/dockerssh4.png)

### 컨테이너 네트워크 ip 확인

```bash
ifconfig
```

![docker ssh](./imgs/dockerssh6.png)

## 호스트에서 도커 컨테이너로 ssh 접속

```bash
ssh sshuser@172.17.0.2
```

![docker ssh](./imgs/dockerssh7.png)
