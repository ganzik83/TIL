import requests

url = 'https://api.bithumb.com/public/ticker/all'  # 빗썸 api

data = requests.get(url).json()['data']

for name, value in data.items():
    if type(value) == type(dict()):
        maximum = float(value['max_price'])
        minimum = float(value['min_price'])
        coin_range = maximum - minimum
        start_price = float(value['opening_price'])

        # 시작가 + 변동폭이 최고가 보다 높은지 확인해보자
        if start_price + coin_range > maximum:
            print("{} : 상승장".format(name))
        else:
            print("{} : 하락장".format(name))
    else:
        continue
