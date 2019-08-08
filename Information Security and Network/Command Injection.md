# Command Injection

운영체제 명령어 실행 부분이 존재하는 경우, 외부 입력값을 검증, 제한하지 않고, 명령어 또는 명령어의 일부로 사용하는 경우 발생

> 외부 입력값을 검증, 제한하지 않고, 명령어로 사용하는 경우 -> 의도하지 않은 명령어가 실행되게 된다.
>
> String cmd = request.getParameter("cmd");
>
> Runtime.getRuntime().exec(cmd)

cmd 라는 변수에 명령어를 입력하고 전달하면 서버에서 cmd를 실행해버린다. (???)

외부 입력값을 검증, 제한하지 않고, 명령어의 일부로 사용하는 경우 -> 의도하지 않은 추가 명령어 실행이 가능해진다

String file = request.getParameter("file");

Runtime.getRuntime().exec("type c:\\\data\\" + file); <== c:\\\data\ 아래에 존재하는 파일의 내용을 콘솔에 출력

```bash
# 유저 리스트를 출력한다
let user

# 유저를 생성한다 (계정을 생성하여 마음대로 출입이 가능해진다)
let user hack hack add
```
