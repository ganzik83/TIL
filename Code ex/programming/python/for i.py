smaller = None
data = [9,41,12,3,74,15]
for num in data:
    if smaller is None:
        smaller = num
    elif num < smaller:
        smaller = num
print(smaller)
