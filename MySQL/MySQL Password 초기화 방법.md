# MySQL에서 Password 초기화 방법 (MacOS)

<https://www.digitalocean.com/community/tutorials/how-to-reset-your-mysql-or-mariadb-root-password>

## 문제 발생

```bash
mysql_secure_installation
```

비밀번호 보안 정책을 사용시 복잡하게 비밀번호를 사용해야만 한다

MySQL을 삭제하고 재설치 했으나 보안정책이 그대로 작동하고 있었다

## 해결

### Step 1: Stopping the Database Server

```bash
mysql.server stop
```

### Step 2: Restarting the Database Server Without Permission Checking

Start the database without loading the grant tables or enabling networking:

```
sudo mysqld_safe --skip-grant-tables --skip-networking &
```

```
mysql -u root
```

접속이 가능해진다

### Step 3: Changing the Root Password

```bash
FLUSH PRIVILEGES;

# Now we can actually change the root password.
ALTER USER 'root'@'localhost' IDENTIFIED BY 'new_password';
```

### Step 4: Restart the Database Server Normally

```bash
sudo kill `cat /var/run/mysqld/mysqld.pid`
```

```bash
mysql.server start
```
