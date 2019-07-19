selected = None  # 변수 초기화
while selected not in ['철수', '영희', '짱구']:
    # while 문을 사용하여 철수, 영희, 짱구가 들어오지 않을 경우 반복 실행하겠다

        selected = input('입력하세요. (단, 철수, 영희, 짱구 셋만 선택가능합니다.)')

print("선택값은: ", selected)   # 철수 영희 짱구가 들어온다면 while문을 빠져나와 출력

