hours = input("노동 시간을 입력하세요: ")
try:
    fh = float(hours)
except:
    print("Error, please enter numeric input")
    quit()


rate = input("시급을 입력하세요: ")

try:
    fr = float(rate)
except:
    print("Error, please enter numeric input")
    quit()


pay = fh * fr

if fh > 40:
    over_pay = (fh - 40) * (fr * 1.5)
    pay = 40 * fr
    print("당신이 급여는 ", over_pay+pay, "달러입니다")

else:
    print("당신의 급여는 ", pay, "달러입니다")