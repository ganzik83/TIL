# 타임존(Timezone) 변경하기

## 환경

- ubuntu 18.04

## 현재 시간 및 날짜 확인

```bash
date
```

```bash
cat /etc/timezone
```

## Timezone 설정

CUI를 통해 시간 설정

```bash
tzselect
```

```bash
sudo dpkg-reconfigure tzdata
```
