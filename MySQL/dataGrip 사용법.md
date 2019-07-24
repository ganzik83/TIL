# dataGrip 사용법

---

## troubleshooting

### Mysql serverTimezone 문제 해결방법

server time zone 에러가 발생하는 이유는 Mysql connector의 버전 5.1.x 이후로 KST ( 한국 표준 시 )를 지원하지 않기 때문이다.

`jdbc:mysql://localhost:3306/` 아래와 같이 타임존을 설정해준다

`jdbc:mysql://localhost:3306/?serverTimezone=Asia/Seoul`
