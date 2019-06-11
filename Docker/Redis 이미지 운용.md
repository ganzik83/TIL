# Redis 이미지 받고 컨테이너 실행하고

```bash
# redis 이미지를 이용해서 컨테이너를 실행한다
docker run redis

# 컨테이너 프로세스 상태를 확인한다
docker ps

# 위에서 만든 컨테이너를 접속해서 실행한다
docker exec -it [container id] redis-cli

# test1을 1234로 저장
set test1 1234

# test1 값을 가져온다
get test1    #"1234"

# redis 컨테이너 클라이언트에서 나가기
exit
```

docker -it 옵션  
-i : standard input에 넣어줘  
-t : standard output 프롬프트에 출력을 해줘

리눅스 파일 처리  
standard input (stdin)  
standard ouput (stdout)  
standard error (stderr)
