import os

for (path, dir, files) in os.walk("/Users"):
    for filename in files:
        ext = os.path.splitext(filename)[-1]
        if ext == '.py':
            print('%s%s' % (path, filename))

