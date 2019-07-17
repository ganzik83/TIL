# nodejs 설치하기

노드 버전 확인

```bash
node -v
```

npm 버전 확인

```bash
npm -v
```

npm 최신 버전으로 설치

```bash
sudo npm install -g npm
```

node 설치

```bash
# 안정화 버전 설치
sudo n stable

# 최신 버전 설치
sudo n latest

# 특정 버전 설치
sudo n [version]
```

uninstall node completely with the commands

```bash
curl -ksO https://gist.githubusercontent.com/nicerobot/2697848/raw/uninstall-node.sh

chmod +x ./uninstall-node.sh
./uninstall-node.sh

rm uninstall-node.sh
```

Or you could check out this website: How do I completely uninstall Node.js, and reinstall from beginning (Mac OS X)

if this doesn't work, you need to remove node via control panel or any other method. As long as it gets removed.

Install node via this website: https://nodejs.org/en/download/
If you use nvm, you can use:

```bash
nvm install node
```

You can already check if it works, then you don't need to take the following steps with: npm -v and then node -v

if you have nvm installed: command -v nvm

Uninstall npm using the following command:

```bash
sudo npm uninstall npm -g
```

Or, if that fails, get the npm source code, and do:

```bash
sudo make uninstall
```

If you have nvm installed, then use:

```
nvm uninstall npm
```

Install npm using the following command:

```bash
npm install -g grunt
```

```bash
brew uninstall --force node
$ brew uninstall --force npm
```

---

참조

삭제
<https://stackoverflow.com/questions/43465086/env-node-no-such-file-or-directory-in-mac>
