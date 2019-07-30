fname = input('Enter File: ')
if len(fname) < 1 : fname = 'clown.txt'

hand = open(fname)

di = dict()
for lin in hand:
    lin = lin.rstrip()
    wds = lin.split()
    for word in wds:
        di[word] = di.get(word, 0) + 1

# print(di)

tmp = list()
for k, v in di.items():
    # print(k, v)
    newt = (v, k)
    tmp.append(newt)

# print(tmp)

tmp = sorted(tmp, reverse=True)
print(tmp[:5])

for v, k in tmp[:5]:
    print(k, v)
