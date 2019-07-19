import re

p = re.compile('a[.]{3,}b')

print(p.match('acccb'))
print(p.match('a....b'))
print(p.match('aaab'))
print(p.match('a.cccb'))