from collections import defaultdict

d = defaultdict(int)

for number in range(1, 100+1):
    for c in str(number):
        d[c] += 1

print(dict(d))
