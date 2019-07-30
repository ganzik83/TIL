fhand = open('romeo.txt')
counts = dict()
for line in fhand:
    words = line.split()
    for word in words:
        counts[word] = counts.get(word, 0) + 1

lst = list()
for k, v in counts.items():
    newup = (v, k)
    lst.append(newup)

lst = sorted(lst, reverse=True)

print(lst[:10])


c = {'a':10, 'b':1, 'c':22}
print(sorted([(v,k) for k, v in c.items()]))