counts = {'chuck':1, 'fred':42, 'jan':100}
for key in counts:
    print(key, counts[key])


print(list(counts))
print(counts.keys())
print(counts.values())

print(counts.items())

for aaa, bbb in counts.items():
    print(aaa, bbb)
