# install nvm package

<https://github.com/nvm-sh/nvm>

## NVM 설치

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
# or
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash


export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

## NVM 설치 활성화하기

```bash
source ~/.profile
nvm ls-remote
```

## nodejs 10.14.2 설치

```bash
nvm install 10.14.2
```

## nodejs 설치 확인

```bash
node -v
```

## nodejs 삭제하기

```bash
# nvm 확인하기
nvm current
v10.14.2

nvm uninstall v10.14.2
```

---

## Mac에서 설치
