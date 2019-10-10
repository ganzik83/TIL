# mac 터미널 환경설정

## zsh 설치

```sh
brew install zsh
```

## oh-my-zsh 설치

<https://ohmyz.sh/>
<https://github.com/robbyrussell/oh-my-zsh/>

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

### font 설치

<https://github.com/powerline/fonts>

```sh
# clone
git clone https://github.com/powerline/fonts.git

# install
cd fonts
./install.sh

# clean-up a bit
cd ..
rm -rf fonts
```

Ubuntu_MonoUbuntu_Mono_derivative_Powerline.ttf

or

Roboto Mono for Powerline

### 옵션 설치

> Autojump

```sh
brew install autojump

vi ~/.zshrc

# .zshrc파일 plugins 항목에 autojump 추가
plugins=(autojump)
```
