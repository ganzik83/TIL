# Git 설치 및 초기 설정

1. <https://github.com> 가입

2. <https://git-scm.com/downloads> 에서 mac용 git 설치

3. 터미널에서 아래 명령어를 통해 git이 설치되었는지 확인
   ```bash
   git version
   ```
4. 초기설정
   ```bash
   git config --global user.name "your name"
   git config --global user.email "your@email.com"
   ```

---

# GitHub 사용법 - 기초

README.md 파일에 echo명령어를 통해 "# TTL"를 출력한다

```bash
echo "# TIL" >> README.md
```

Git 시작하기  
현재 디렉토리에 작업을 진행하겠다는 명령어

```bash
git init
```

README.md 파일 관리대상으로 추가하기

```bash
git add README.md
```

commit 메시지(버전 메시지) 남기기

```bash
git commit -m "first commit"
```

Origin에 원격 저장소를 등록한다

```bash
git remote add origin https://github.com/ganzik/TIL.git
```

로컬에서 수정된 소스를 origin에 등록된 서버로 등록한다

```bash
git push -u origin master
```

---

## GitHub Learning Lab

<https://lab.github.com/courses>
