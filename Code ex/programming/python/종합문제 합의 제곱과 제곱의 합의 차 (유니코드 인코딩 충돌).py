sum1 = 0
sum2 = 0

for i in range(1, 100+1):
    sum1 += i
    sum2 += i**2

sum1 = sum1 ** 2

print(sum1 - sum2