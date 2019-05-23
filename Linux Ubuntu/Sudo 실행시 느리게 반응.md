# 문제

Sudo 실행시 10초 이상 딜레이 되는 현상이 발생

# 해결

/etc/hosts 파일 수정

```bash
sudo vim /etc/hosts
```

> 127.0.0.1 localhost localhost.localdomain localhost4 localhost4.localdomain4 **hostname**
>
> ::1 localhost localhost.localdomain localhost6 localhost6.localdomain6 **hostname**

`hostname`을 추가해준다
