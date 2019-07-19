import re
p = re.compile("^python\s\w+", re.MULTILINE)

data = """python on
life is too short
python two
you need python
python three"""

print(p.findall(data))

