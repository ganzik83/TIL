data = "이의덕,이재명,권종수,이재수,박철호,강동희,이재수,김지석,최승만,이성만,박영희,박수호,전경식,송우환,김재식,이유정"


names = data.split(",")

park = 0
kim = 0

for name in names:
    if name.startswith('박'):
        park += 1
    elif name.startswith('김'):
        kim += 1

print(kim, park)    # 김씨와 박씨 count 출력
print(names.count('이재수'))   # '이재수'란 이름 count 출력


names = list(set(names))
print(names)   # 중복을 제거한 이름 출력
print(sorted(names))    # 중복을 제거한 이름을 오름차순으로 정렬하여 출력