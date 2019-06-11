# install ubuntu software-center 우분투 소프트웨어센터 설치 16.04

우분투 소프트웨어센터가 설치되어있지 않아서 설치를 하려고 하면 의존성문제 오류를 나타낸다

```bash
apt-get install software-center
```

![install ubuntu software-center](../imgs/softwarecenter.png)

```bash
# gvfs-backends 패키지를 설치하자
apt-get install gvfs-backends
```

![install ubuntu software-center](../imgs/softwarecenter1.png)

gvfs, gvfs-daemons, gvfs-libs, gvfs-common 패키지 의존정 문제가 발생한다.

```bash
# 모두 삭제하자
apt-get remove gvfs
apt-get remove gvfs-deamons
apt-get remove gvfs-libs
apt-get remove gvfs-common

# 다시 gvfs-backends 패키지를 설치하자
apt-get install gvfs-backends
# 제대로 설치가 된다
```

```bash
# 소프트웨어센터를 설치한다
apt-get install software-center
```
