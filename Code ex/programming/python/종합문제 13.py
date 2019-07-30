import json

with open('myinfo.json') as f:
    data = json.load(f)  # json 파일을 읽고 딕셔너리로 저장한다

data['age'] = 40    # age값을 40으로 변경

with open('myinfo.json', 'w') as f:
    json.dump(data, f, indent=4)    # 딕셔너리를 json 파일로 저장한다