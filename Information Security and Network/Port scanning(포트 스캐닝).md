#포트 스캐닝

## TCP Open Scan

TCP 연결 과정 : 3way handshaking을 통해서 해당 포트의 실행(사용)여부를 확인  
해당 포트가 유효하면 : SYN -> SYN/ARC -> ACK = 연결이 수립 -> 접속(연결) 로그가 남음
해당 포트가 무효하면 : SYN -> RST/ARC

## Stealth Scan

기록이 남기지 않는 포트 스캔 방법

## TCP Half open scan

해당 포트가 유효하면 : SYN -> SYN/ACK -> ACK보내지 말고 가만히 있음 (혹은 RST를 보냄) -> 연결이 수립되지 않았기 때문에 로그가 남지 않는다
해당 포트가 무효하면 : SYN -> RST/ARC

## FIN Scan

해당 포트가 유효하면 : FIN -> ????(무응답)
해당 포트가 무효하면 : SYN -> RST/ACK

## Xmas Scan

해당 포트가 유효하면 : FIN+PSH+URG -> ????(무응답)
해당 포트가 무효하면 : FIN+PSH+URG -> RST/ACK

## Null Scan

해당 포트가 유효하면 : Null(flag 없이 보냄) -> ????(무응답)
해당 포트가 무효하면 : Null -> RST/ACK
