# 원격 파일 제어하기 vsftpd

VScode extensions에서 sftp by liximomo 검색

`Cmd+Shift+P` 커맨드 팔레트를 열고 `SFTP: config`를 선택

sftp.json

```json
{
  "name": "Styel",
  "host": "111.111.111.111",
  "protocol": "sftp",
  "port": 22,
  "username": "ubuntu",
  "password": "123456",
  "privateKeyPath": "/Users/kimkihong/Dropbox/styel.pem",
  "remotePath": "/home/ubuntu/",
  "uploadOnSave": true,
  "ignore": [".vscode", ".git", ".DS_Store"]
}
```
