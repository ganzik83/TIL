# GitHub 사용법 - 기초

README.md 파일에 echo명령어를 통해 "# TTL"를 출력한다

```
echo "# TIL" >> README.md
```

Git 시작하기  
현재 디렉토리에 작업을 진행하겠다는 명령어

```
git init
```

README.md 파일 관리대상으로 추가하기

```
git add README.md
```

commit 메시지(버전 메시지) 남기기

```
git commit -m "first commit"
```

Origin에 원격 저장소를 등록한다

```
git remote add origin https://github.com/ganzik/TIL.git
```

로컬에서 수정된 소스를 origin에 등록된 서버로 등록한다

```
git push -u origin master
```
