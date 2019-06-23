# 리눅스 우분투 sudo 명령어 실행시 느리게 반응 할 때 해결 방법

Sudo 명령어를 실행하면 10초 이상 딜레이 되는 현상이 발생했을 때 해결하는 방법은 간단하다

```bash
sudo vim /etc/hosts
```

`/etc/hosts` 파일을 열어 수정해 주면 된다

```bash
127.0.0.1 localhost localhost.localdomain localhost4 localhost4.localdomain4 hostname

::1 localhost localhost.localdomain localhost6 localhost6.localdomain6 hostname
```

`hostname`을 추가해주면 된다.
`hostname`은 그대로 `hostname`으로 입력하는 것이 아닌 호스트 서버의 이름을 입력해주어야한다.
