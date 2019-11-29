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

> Syntax highlighting

```sh
# 설치
brew install zsh-syntax-highlighting

vi ~/.zshrc

# .zshrc 파일에 추가
source /usr/local/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
```

```sh
vim ~/.oh-my-zsh/themes/agnoster.zsh-theme
```

```go
prompt_newline() {
  if [[ -n $CURRENT_BG ]]; then
    echo -n "%{%k%F{$CURRENT_BG}%}$SEGMENT_SEPARATOR
%{%k%F{blue}%}$SEGMENT_SEPARATOR"
  else
    echo -n "%{%k%}"
  fi

  echo -n "%{%f%}"
  CURRENT_BG=''
}

build_prompt() {
  RETVAL=$?
  prompt_status
  prompt_virtualenv
  prompt_context
  prompt_dir
  prompt_git
  prompt_hg
  prompt_newline // 추가
  prompt_end
}
```
