# UFW [The Uncomplicated Firewall]

## 1. 설치

```
sudo apt-get install ufw
```

## 2. 활성화

```
sudo ufw enable
```

## 3. 기본 정책 설정

들어오는 통신은 막고 나가는 통신은 허용하기

```
sudo ufw default deny incoming
sudo ufw default allow outgoing
```

## 4. 네트워크 허용

```
sudo ufw allow ssh
sudo ufw allow 80/tcp
sudo ufw allow from 192.168.0.1
```

## 5. 네트워크 거부

```
sudo ufw deny 8080/tcp
```

## 6. 네트워크 삭제

```
sudo ufw delete allow ssh
```

## 7. 규칙 확인

```
sudo ufw status
```

## 8. 비활성화

```
sudo ufw disable
```

---

Port 범위는 콜론으로 설정

> 5000:5005/tcp

특정 ip 및 port 허용

> sudo ufw allow from xxx.xxx.xxx.xxx to any port 80

특정 ip 및 port 및 protocol 허용

> sudo ufw allow from xxx.xxx.xxx.xxx to any port 8000:9000 proto tcp
