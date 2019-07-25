# mysql 재설치

홈브루로 로컬 OSX 컴퓨터에 설치한 MySQL 데이터베이스를 재설치하는 방법입니다.
479 페이지의 MySQL 설치 후 mysql_secure_installation을 실행하는 부분의 주의사항을 읽지 못하신 독자분들이 있는 것 같습니다.
중요함을 좀 더 강하게 썼어야 하는데 제 불찰입니다.

N을 눌러야 하는 질문에 Y를 눌렀다면, 실습에서 사용할 homestead 사용자에게 secret와 같은 짧은 비밀번호를 부여할 수 없습니다. 이 때는 MySQL을 처음 부터 다시 설치하는 것이 깔끔합니다. 아래 가이드를 따라 주세요.

실행 중인 홈브루 서비스를 확인합니다.

```bash
brew services list
```

기존에 사용하던 MySQL 데이터 디렉터리를 확인합니다.

```bash
~ $ ls -al /usr/local/var/mysql
```

MySQL 서버를 중지시키고, 기존에 사용하던 데이터 디렉터리와 MySQL 바이너리를 삭제합니다.

만일의 사태에 대비해 삭제하기 전에 데이터를 백업해 두는 것이 좋습니다.

```bash
mysqldump -uroot -p source__database_name > dump_file_name.sql

brew services stop mysql

rm -rf /usr/local/var/mysql

brew uninstall mysql
```

잘 삭제되었는 지 확인해 볼까요?

```bash
brew services list

brew list | grep mysql
```

완전히 지워졌으니, 이제 다시 설치를 합니다.

```bash
brew install mysql
```

MySQL 서비스를 시작하고 접속해 봅니다. 현재는 root 사용자의 비밀번호가 없는 상태입니다.

```bash
brew services start mysql
```

```bash
mysql -uroot
```

사실 개발 머신에서는 이 상태로 사용해도 아무런 문제가 없습니다. 그럼에도 불구하고 마음의 평화를 위해, 또 편의상 책에서 사용한 homestead 사용자와 같은 비밀번호를 사용하기 위해 root 사용자의 비밀번호를 셋팅해 보겠습니다.

MySQL 쿼리 사용이 익숙하지 않은 사용자들을 위해 mysql_secure_installation라는 도우미 함수를 제공합니다 . 5.7부터라고 알고 있고, 이전 버전에서는 mysql_easy_install(?)였던 걸로 기억합니다.

그냥 계속 엔터를 누르면 VALIDATE PASSWORD PLUGIN이라는 녀석이 설치되는데요. 이 녀석이 활성화되면 우리가 의도한 secret와 같이 짧고 단순한 비밀번호는 쓸 수 없습니다.

사용자의 실수를 방지하기 위해서 이 블록의 콘솔 출력 결과만 한글로 번역합니다. 아래 블록에서 한글로 번역하지 않은 인터렉티브 질문에 대해서는 그냥 엔터를 눌러도 무방합니다.

다시 요약하자면, 실습 중에 root, homstead 사용자에 대해 복잡한 긴 비밀번호를 써도 무방하다면 이 가이드를 따를 필요가 없습니다.

```bash
mysql_secure_installation
```

이제 root 사용자의 비밀번호가 설정되었습니다. 실험해 볼까요?

```
mysql -uroot
```

```
mysql -uroot -p
```

백업해 놓은 데이터베이스를 복원하려면 다음 명령을 수행하면 됩니다.

```
mysql -uroot -p target_table_name < dump_file_name.sql
```

고급 사용자라면 mysql_secure_installation대신 다음 쿼리를 직접 수행하면 더 편리합니다.

```
mysql -uroot
```

```sql
mysql> use mysql;
```

```sql
mysql> SELECT Host, User, authentication_string FROM user;
```

```sql
mysql> UPDATE user SET authentication_string=PASSWORD('new_password') WHERE Host = 'localhost' AND User = 'root';
```

```sql
mysql> FLUSH PRIVILEGES;
```

```sql
mysql> exit
```
