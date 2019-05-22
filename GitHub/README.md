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

# GitHub Workflow

The GitHub flow is a lightweight, branch-based workflow built around core Git commands used by teams around the globe—including ours.

The GitHub flow has six steps, each with distinct benefits when implemented:

## Create a branch

Topic branches created from the canonical deployment branch (usually master) allow teams to contribute to many parallel efforts. Short-lived topic branches, in particular, keep teams focused and results in quick ships.

## Add commits

Snapshots of development efforts within a branch create safe, revertible points in the project’s history.

## Open a pull request

Pull requests publicize a project’s ongoing efforts and set the tone for a transparent development process.

## Discuss and review code

Teams participate in code reviews by commenting, testing, and reviewing open pull requests. Code review is at the core of an open and participatory culture.

## Merge

Upon clicking merge, GitHub automatically performs the equivalent of a local ‘git merge’ operation. GitHub also keeps the entire branch development history on the merged pull request.

## Deploy

Teams can choose the best release cycles or incorporate continuous integration tools and operate with the assurance that code on the deployment branch has gone through a robust workflow.

Learn more about the GitHub flow
Developers can find more information about the GitHub flow in the resources provided below.

[Interactive guide](https://guides.github.com/introduction/flow/)

[GitHub Flow video](https://www.youtube.com/watch?v=47E-jcuQz5c&index=1&list=PLg7s6cbtAD17Gw5u8644bgKhgRLiJXdX4)

---

## GitHub Learning Lab

<https://lab.github.com/courses>
