balls = [0] * 4  # 0 0 0 0
count = 0


def rec(depth):
    if depth == 3:
        # 깊이를 확인
        pass  # pass는 오류가 안나도록 해주는 것
        count += 1
        print(count)
    else:
        # for문을 통해서 경우의 수 탐색
        for i in range(depth, 4):
            # visited 중복 확인
            # 재귀적으로 함수 호출
            balls[i] = 1
            rec(i + 1)
            balls[i] = 0


rec(0)
