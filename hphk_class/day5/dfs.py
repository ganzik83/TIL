# balls = [0] * 3

# # 0 0 0

# # 0 0 1

# # 0 1 0

# # 0 1 1

# # 1 0 0

# # 1 0 1

# # 1 1 0

# # 1 1 1


# count = 0


# def rec(depth):
#     global balls

#     if depth == 3:
#         # 깊이를 확인
#         pass  # pass는 오류가 안나도록 해주는 것
#         count += 1
#         print(count)
#     else:
#         # for문을 통해서 경우의 수 탐색
#         for i in range(depth, 4):
#             # visited 중복 확인
#             # 재귀적으로 함수 호출
#             balls[i] = 1
#             rec(i + 1)
#             balls[i] = 0


# rec(0)

# 재귀 함수 -> 어려울 수 있지만 추상화 하는데에는 가장 쉬운 방법

def rec(now):
    if now == 3:
        pass
    else:
        rec(now + 1)
        # rec(1) > 함수 종료 세 번째
        # rec(2) > 함수 종료 두 번째
        # rec(3) > 함수 종료 첫 번째
        print(now)


rec(0)
