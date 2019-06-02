# grep(Global Regular Expression Print)

특정 패턴(문자열)을 갖는 줄을 찾아서 출력해주는 명령어

grep 명령은 파일 내에서 지정한 패턴이나 문자열을 찾은 후에 그 패턴을 포함하고 있는 모든 행을 표준 출력한다.  
하나 이상의 파일로부터 프로그램 수정 등을 위해 변수, 또는 함수명을 찾을 때 많이 사용된다.

```bash
grep [option] pattern file(s)
```

## 옵션

| 옵션   | 설명                                                                                     |
| ------ | ---------------------------------------------------------------------------------------- |
| -a     | grep은 바이너리 파일은 처리할 수 없다. binary파일을 텍스트파일처럼 처리할 수 있게 해준다 |
| -b     | 패턴과 일치하는 줄의 시작점을 출력한다. (--byte-offset)                                  |
| **-c** | 패턴과 일치하는 줄의 개수를 출력한다 (--count)                                           |
| -h     | 여러 개의 파일을 검색 시 출력하는 파일의 이름이 붙는 것을 방지한다                       |
| **-i** | 검색할 때 대소문자를 구분하지 않는다 (--ignore-case)(-y)                                 |
| -n     | 패턴과 일치하는 줄의 번호와 내용을 같이 출력한다 (--number)                              |
| -v     | 패턴과 일치하지 않는 줄을 출력한다 (--invert-match)                                      |
| **-w** | 패턴과 한 단어로 일치해야 출력한다 (--word-regexp)                                       |
| -x     | 패턴과 한 줄로 일치해야 출력한다                                                         |
| -l     | 주어진 패턴과 일치하는 패턴이 있는 파일의 이름만 출력한다                                |
| -r     | 하위 리터리까지 주어진 패턴을 찾는다                                                     |
| -o     | 지정한 패턴과 매칭되는 것만 출력한다 (--only-matching)                                   |
| -E     | 보통 grep은 하나의 패턴만을 검색하는데, 이 옵션은                                        | (파이프)와 연계하여 여러 패턴을 찾는다. egrep 명령과 같다 |
| -F     | 지정한 문자들, 특히 특수문자를 기호 그대로 인식하여 출력한다. fgrep명령과 같다           |

```bash
# 현재 디렉터리의 모든 파일들이 'hello'라는 문자열이 들어있는 줄을 몇 개씩 가지고 있는지 보여준다
grep -c hello *

# 현재 디렉터리에 있는 모든 파일 중에서 'hello'라는 문자열이 들어있는 줄을 출력하는데 파일명은 출력하지 않는다
grep -h hello *
```

## 정규식

고정 문자열이 아닌 특정 패턴을 가진 문자열을 찾고 싶을 때는 정규식을 사용한다  
정규식은 다른 명령어나 다른 언어에서도 자주 사용되므로 꼭 숙지하자

| 메타문자  | 기능                                                      | 예시         | 예 설명                                       |
| --------- | --------------------------------------------------------- | ------------ | --------------------------------------------- |
| ^         | 행의 시작 지시자                                          | ^hello       | hello로 시작하는 모든 행                      |
| \$        | 행의 끝 지시자                                            | hello\$      | hello로 끝나는 모든 행                        |
| .         | a single character                                        | h...o        | h와 o사이에 세 글자가 있어야 함               |
|           | 하나의 문자와 대응                                        |              |
| ?(egrep)  | the preceding character matches 0 or more 1 times only    | hel?o        | hello, helo 등을 검색                         |
|           | 앞 문자가 0또는 한개로 된 것을 의미                       |              |
| .\*       | Nothing or any number of charaters                        | hel.\*o      | helo, helao, helfsadfsdfo 등 검색             |
|           | 0이거나 그 이상의 문자                                    |              |
| \*        | zero or more occurrences of the previous character        | hel\*o       | helo, hello, helllo, helllllo 등을 검색       |
|           | 앞 문자가 하나이거나 반복되어진 것을 의미                 |              |
| \|(egrep) | or(또는)이라는 의미                                       | or           | is                                            | go | oranges, Lisa, mongodb 등등 셋 중 하나라도 들어있으면 검색 |
| []        | 문자 리스트 중의 한 문자                                  | New[abc]     | Newa, Newb, Newc등을 검색                     |
| [0-9]     | 0~9까지 숫자                                              | [0-9]        | 0부터 9까지 숫자를 포함                       |
| [a-z]     | 소문자 a~z                                                | [a-j]        | 소문자 a부터 j까지                            |
| [A-Z]     | 대문자 A~Z                                                | [D-K]        | 대문자 D부터 K까지                            |
| [^]       | ^는 []안에 들어가면 not을 의미한다                        | [^1-3]       | 1,2,3을 제외한 모든 문자                      |
| \         | ignores the special meaning of the character following it | New\.\[abc\] | New.abc와 같은 말을 찾는다                    |
|           | 지정문자 특징을 무시한다                                  |              | 정규표현식 .이나[]패턴을 무시한다             |
| \\<       | 딘어의 시작 지시자                                        | \\<hello     | hello로 시작하는 단어를 포함하는 행과 대응    |
| \\>       | 단어의 끝 지시자                                          | \\>hello     | hello로 끝나는 단어를 포함하는 행과 대응      |
| x\\{m\\}  | 문자 x를 m번 반복                                         | o\\{5\\}     | 문자 o가 5회 연속적으로 나오는 모든 행과 대응 |
| x\\{m.\\} | 적어도 m번 반복                                           | o\\{5.\\}    | 문자 o가 최소한 5번 반복되는 모든 행과 대응   |

```bash
# greptest파일에서 Agarwal, agarwal, agrrwal, agaawal 등의 문자를 찾는다
grep "[aA]g[ar][ar]wal" greptest

# d로 시작하는 모든 파일에서 notepad를 포함하는 모든 행을 찾는다
grep notepad d*

# greptest파일에서 a,b,c,d로 시작하는 단어를 찾는다
grep [a-d] greptest

# greptest파일에서 a나 b로 시작되는 모든 행을 찾는다
grep ^[ab] greptest

# greptest 파일에서 a나 b가 들어있지 않은 행을 찾는다. abroad처럼 a나 b를 제외한 문자가 포함되면 출력한다
grep [^ab] greptest

# greptest 파일에서 숫자가 존재하는 줄을 출력
grep [0-9] greptest

# greptest파일에서 app으로 시작하는 모든 단어를 찾는다
grep app* greptest

# aa가 한 번 나오고 그 뒤에 a가 0번 혹은 여러번 나온 후에 공백이 연이어 등장하는 문자열을 포함한 모든 행을 출력
grep aaa* greptest

# /etc/vsftpd/vsftpd.conf 파일에서 #으로 시작하지 않는 줄만 출력
grep -v ^# /etc/vsftpd/vsftpd.conf

# greptest 파일에서 .5가 나오는 모든 행을 출력
grep \.5 greptest

# greptest 파일에서 N.I.K.E 를 찾는다
grep N\.I\.K\.E greptest

# 소문자 하나로 시작하고 `\<[a-z]` 이어서 공백을 포함한 임의 개수의 여러문자가 나오며 `.*` n으로 끝나는 단어가 포함된 모든 행을 출력
grep \<[a-z].*n\> greptest
```

## 유용한 예시

프로세스 리스트에서 원하는 프로세스 상태 찾기

```bash
# 모든 프로세스 상태 정보를 자세히 보여준다
ps aux

# 도커 프로세스가 돌아가는지 알고 싶은 경우
ps aux | grep docker
```
