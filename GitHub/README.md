# Git 한글 책

<https://git-scm.com/book/ko/v2>

# git flow 전략 사용

<http://woowabros.github.io/experience/2017/10/30/baemin-mobile-git-branch-strategy.html>

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

### 원격 저장소 불러오기

github에서 원격 저장소를 만들었다면 그것을 로컬과 연결시켜야 한다.

'git clone 사용자명@호스트:/원격/저장소/경로'라고 치면 된다.

사용자명 blabla..에 대해서는 github에서 원격 저장소에 들어가서 clone or download라는 버튼을 누르면 원격저장소의 주소가 나오니 그것을 쳐주면 된다!

```bash
git clone <path>
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

# GitHub and the command line

For developers new to the command line, the GitHub Training team has put together a series of [tutorials](https://help.github.com/en/articles/git-and-github-learning-resources) on Git commands to guide the way. Sometimes, a series of commands can paint a picture of how to use Git:

## Example: Contribute to an existing repository

```bash
# download a repository on GitHub.com to our machine
git clone https://github.com/me/repo.git

# change into the `repo` directory
cd repo

# create a new branch to store any new changes
git branch my-branch

# switch to that branch (line of development)
git checkout my-branch

# make changes, for example, edit `file1.md` and `file2.md` using the text editor

# stage the changed files
git add file1.md file2.md

# take a snapshot of the staging area (anything that's been added)
git commit -m "my snapshot"

# push changes to github
git push --set-upstream origin my-branch

```

## Example: Start a new repository and publish it to GitHub

First, you will need to create a new repository on GitHub. You can learn how to create a new repository in our [Hello World guide](https://guides.github.com/activities/hello-world/#repository). **Do not** initialize the repository with a **README**, .gitignore or License. This empty repository will await your code.

```bash
# create a new directory, and initialize it with git-specific functions
git init my-repo

# change into the `my-repo` directory
cd my-repo

# create the first file in the project
touch README.md

# git isn't aware of the file, stage it
git add README.md

# take a snapshot of the staging area
git commit -m "add README to initial commit"

# provide the path for the repository you created on github
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git

# push changes to github
git push --set-upstream origin master

```

## Example: contribute to an existing branch on GitHub

```bash
# assumption: a project called `repo` already exists on the machine, and a new branch has been pushed to GitHub.com since the last time changes were made locally

# change into the `repo` directory
cd repo

# update all remote tracking branches, and the currently checked out branch
git pull

# change into the existing branch called `feature-a`
git checkout feature-a

# make changes, for example, edit `file1.md` using the text editor

# stage the changed file
git add file1.md

# take a snapshot of the staging area
git commit -m "edit file1"

# push changes to github
git push
```

```sh
mkdir TIL

cd TIL

git init

touch README.md

git status

git add README.md


git config --global user.name "kihong"

git config --global user.name # 확인

git config --global user.email "ganzik83@gmail.com"

git config --global user.email  # 확인

git commit   # 내용 입력

git log

git remote # 리모트 환경

git remote add origin https://github.com/ganzik/til_test.git # 원격 저장소 위치 origin에 더한다

git remote -v

git push origin master # origin 위치에 master 브랜치를 푸쉬한다

# git 커밋을 잘못했을 경우 되돌리기 위해서
git reset HEAD^
```

---

## GitHub Learning Lab

<https://lab.github.com/courses>

## GitHub Youtube 강좌

<https://www.youtube.com/watch?v=rhP5pseOJc0&list=PLRx0vPvlEmdD5FLIdwTM4mKBgyjv4no81>
