# 크로스 사이트 스크립팅 Cross-site Scripting

웹 페이지 생성에 사용된 입력값 검증이 이뤄지지 않은 것

동적 페이지 입력값이 페이지 생성에 사용되었음. 입력값에 실행 가능한 코드가 포함되어있음.

공격자가 전달한 스크립트 코드가 사용자 브라우저를 통해서 실행되는 것

1. 저장 XSS (Stored)
2. 반사 XSS (Reflective)

ID중복체크
[화면]
ID: abc<script>...</script> -> check.jsp?id=abc<script>...</script> 데이터 조회

"abc<script>...</script>"는 존재합니다. <---- "<%= request.getParameter("id")%>"는 존재합니다

```js
<%
// 입력값에 포함된 태그 요솧 (<>)를 HTML 인코딩 처리해서 출력한다.
// <script>..</script> ⇒ &lt;script&gt;..&lt;/script&gt;

String input = request.getParameter("id");
if (input != null){
    input = input.replaceAll("<", "&lt;");
    input = input.replaceAll(">", "&gt;");
}
%>
// "<%=input>"는 존재합니다.
```
