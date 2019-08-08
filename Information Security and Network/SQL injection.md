# SQL injection

외부 입력값을 쿼리 조작 문자열 포함 여부를 확인하지 않고, 쿼리 생성 및 실행에 사용하는 경우 발생 -> 원래 의미와 다른 형태로 쿼리가 변형되어서 실행되는 것

[simple SQL injection](./docs/simple_sqlinjection.pdf)

SQL 명령에 사용된 특별한 엘리먼트를 무효화하지 않는 것 (SQL Injection)
SQL문 예약어(예를들어 SELECT WHERE 등등 미리 정해져 있는것) 또는 특수기호

이스케이프(백슬러시 입력 \ ) = 메타문자(의미문자)에서 의미를 제거하고 문자만 남기는 것

select \* from user where id = 123
id컬럼의 값이 123인 user 테이블에 정보를 조회

select \* from user where id = 123 or 1 = 1
user 테이블의 모든 정보를 조회

### 운영체제 명령어 삽입
