# mariadb 설치 오류

```
apt-get install apparmor-utils
```

![mariadb error](../imgs/mariadberror2.png)

```bash
aa-complain /usr/sbin/mysqld
```

![mariadb error](../imgs/mariadberror.png)

```bash
aa-disable /usr/sbin/mysqld
```

![mariadb error](../imgs/mariadberror1.png)
