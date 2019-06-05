# HTTP Cookie

## Session cookies - 세션 쿠키섹션

클라이언트가 종료되면 삭제(delete)된다, 왜냐하면 Expires 혹은 Max-Age를 명시하지 않았기 때문이다. 그러나 웹 브라우저는 세션 복구를 할 수 있으며, 이 기능은 브라우저가 결코 닫힌 적이 없던 것처럼 대부분의 세션 쿠키들을 영속적인 것으로 만듭니다.

## Permanent cookies - 영속적인 쿠키섹션

클라이언트가 닫힐 때 만료되는 대신에, 영속적인 쿠키는 명시된 날짜(Expires)에 만료되거나 혹은 명시한 기간(Max-Age) 이후에 만료됩니다.

> Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT;
