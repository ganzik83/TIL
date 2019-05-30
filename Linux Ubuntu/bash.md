# bash 배시 셸

bash(Bourne Again SHell)

- 셀 명령문 처리 방법  
  (프롬프트) 명령어 [옵션][인자]  
  ex) # rm -rf /mydir

## 변수의 기본

- 셸 스크립트에서는 변수를 사용하기 전에 미리 선언하지 않음  
  변수에 값이 할당되면 자동으로 변수가 생성됨

- 변수에 넣는 모든 값은 문자열(string)으로 취급한다. 숫자를 넣어도 문자열로 취급

- 변수 이름은 대소문자를 구분 ex) $aa !== $AA

- 번수를 대입할 때 '=' 좌우에 공백이 없어야 한다

```bash
#!/bin/sh
# 앞 뒤 공백으로 오류 출력
testval = Hello     # 오류
testval=Hello    # 정상

# 값에 공백이 있을 경우 오류를 나타낸다. 쌍따옴표로 묵어줘야함
testval=Yes Sir     # 오류
testval="Yes Sri"   # 정상

# 숫자는 문자열로 출력한다
testval=7+5
echo $testval    # testval 변수를 불러오면 7+5라는 문자열로 출력한다
```

## 변수의 입력과 출력

'\$' 문자가 들어간 글자를 출력하려면 ' '로 묶거나 문자열 앞에 \ 를 붙여서 이스케이프 시킨다

```bash
#!/bin/sh
# 변수 myvar에 Hi Woo를 입력
myvar="Hi Woo"

# myvar 출력
echo $myvar
Hi Woo

# 쌍따옴표 적용시
echo "$myvar"
Hi Woo

# 홀따옴표 적용시 escape
echo '$myvar'
$myvar

# \ 적용시 escape
echo \$myvar
$myvar

# 한글 출력
echo 값 입력 :

# 변수 입력값을 받아서 myvar에 지정
read myvar

# 홀따옴표와 비교
echo '$myvar' = $myvar
$myvar = Hi Woo

# 쌍따옴표 아래에 홀따옴표는 문자열로 인식된다
echo "'$myvar' = $myvar"
'Hi Woo' = Hi Woo
```

## 숫자 계산

변수에 +, -, *, / 등의 연산을 하려면 expr 키워드를 사용  
단 수식과 함께 `로 묶어줘야 한다  
또한 괄호와 *를 사용하려면 앞에 역슬래시(\)를 붙여준다

```bash
#!bin/sh


```

> 연습문제

2단부터 9단까지 구구단을 세로로 출력하라

```bash
for i in {2..9}
do
    for j in {1..9}
    do
        echo "$i * $j"=`expr $i \* $j`
    done
done
exit 0
```

2단부터 9단까지 구구단을 가로로 출력하라

```bash
#!/bin/bash

# i x j = x
for (( j = 1 ; j < 10 ; j ++ ))
do
	for (( i = 2 ; i < 10 ; i ++ ))
	do
		# printf "%s x %s = %s \t" $i $j `expr $i \* $j`
		x=`expr $i \* $j`
		echo -e -n "$i x $j = $x\t"
	done
	# printf "\n"
	echo
done
```

> 연습문제 2

1. 임의의 숫자를 생성
2. 사용자가 숫자를 입력해서 1.에서 생성한 숫자를 맞추는 게임
3. 만약 사용자가 입력한 숫자가 1.에서 생성한 숫자와 다르면, 크다, 작다 메시지를 출력하고, 맞으면 정답 메시지를 출력하고 종료한다
4. 맞추는 회수는 10회로 제한한다
5. 10회를 초과하면 실패 메시지를 출력하고 종료한다.

```bash
#!/bin/bash
r=$(rand)

count=0
while [ $count -lt 10 ]
do
	echo 숫자를 입력하세요.
	read num

	if [ $num -eq $r ]
	then
		echo 정답입니다.
		exit 0
	fi

	if [ $num -lt $r ]
	then
		echo 더 큰 수를 입력하세요.
	else
		echo 더 작은 수를 입력하세요.
	fi
	count=`expr $count + 1`
done
echo 회수를 초과했습니다.
exit 1
```
