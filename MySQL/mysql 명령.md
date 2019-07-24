```sql
-- 총 7자리 소수점은 2자리까지
alter table sample5 add COL_DECIMAL decimal(7,2);

-- 정상작동
insert into sample5 (sample5.COL_DECIMAL) values (12345.81);

-- 총 자리수를 넘어섰기 때문에 작동 안함
insert into sample5 (sample5.COL_DECIMAL) values (1234567.81);
```

```sql
select * from departments;

select * from employees;

select first_name, last_name, gender from employees;

select first_name, last_name, gender from employees where gender='M';

select first_name, last_name, gender from employees where emp_no <= 10010;

-- 10010번 emp_no와 gender가 M인 사람을 출력
select first_name, last_name, gender from employees where emp_no <= 10010 and gender='M';

select * from employees where emp_no <= 10010 or gender='M';
```

정렬하기

```sql
select * from employees order by first_name;

-- 첫번째 이름으로 정렬을 하고 그 다음에 두번째 이름으로 정렬한다
select * from employees order by first_name, last_name;

-- first_name은 ASC(정순으로 정렬), last_name은 DESC(역순으로 정렬)
select * from employees order by first_name ASC, last_name DESC;
```

## limit

게시판에서 한 페이지에 몇 개 불러오는지를 이용 할 때 사용하는 명령어

```sql
-- 10개만 불러온다
select * from employees limit 10;

-- 앞에 10개를 생략하고 10개를 불러온다
select * from employees limit 10 offset 10;
```

```sql
-- 중복된 컬럼을 제거한다
SELECT DISTINCT first_name FROM employees;
```

## 패턴검색

```sql
--  first_name에서 K로 시작하는것을 찾아준다
SELECT * FROM employees WHERE first_name LIKE 'K%';

--  first_name에서 KA로 시작하는것을 찾아준다
SELECT * FROM employees WHERE first_name LIKE 'KA%';
```

## Update

```sql
-- where 절에 있는 조건을 SET 조건으로 모조리 바꾼다 그래서 사용 할 때 상당히 조심해야 한다
UPDATE employees SET birth_date = '2011-11-11' WHERE birth_date='1953-09-02';

-- emp_no가 10001번의 birth_date를 2011-11-11 값으로 바꾼다
UPDATE employees SET birth_date = '2011-11-11' WHERE emp_no=10001;

-- del_yn 값으로 N을 전부 집어넣는다.
UPDATE employees SET del_yn = 'N';
```

## Delete

```sql
--  employees 테이블에서 emp_no 10001번을 삭제한다
DELETE FROM employees WHERE emp_no = 10001;
```
