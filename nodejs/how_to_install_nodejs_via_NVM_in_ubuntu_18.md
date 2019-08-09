# How to Install NodeJS via NVM in Ubuntu 18.04 LTS?

<https://qiita.com/shaching/items/6e398140432d4133c866>

<https://github.com/creationix/nvm>

<https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04>

## NVM 설치하기

<https://github.com/nvm-sh/nvm>

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```

## NVM 설치 활성화하기

```bash
source ~/.profile
nvm ls-remote
```

## NodeJS 설치하기

```bash
nvm install 10.14.2
```

## NodeJS 설치 확인하기

```bash
node -v
```

## NodeJS 삭제하기

```
# nvm 확인하기
nvm current
v10.14.2

nvm uninstall v10.14.2
```
