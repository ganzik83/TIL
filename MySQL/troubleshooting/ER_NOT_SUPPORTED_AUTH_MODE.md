# ER_NOT_SUPPORTED_AUTH_MODE

MySQL 8.0 버전에서 패스워드 방식 때문에 접속이 안되는 경우가 있다  
아래와 같은 에러를 내뿜는다

```bash
Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
```

MySQL에 접속해서 아래와 같이 패스워드 입력 방식을 변경시켜주자

```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'

-- ex) user = hong, host = styel.io, password = 1234
ALTER USER 'hong'@'styel.io' IDENTIFIED WITH mysql_native_password BY '1234'
```

---

## Reference

<https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server>
