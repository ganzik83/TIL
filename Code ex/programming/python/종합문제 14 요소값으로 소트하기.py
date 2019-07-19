from operator import itemgetter

students = [
    ("홍길동", 22),
    ("김철수", 32),
    ("박영희", 17),
]

students = sorted(students, key=itemgetter(1))

print(students)
