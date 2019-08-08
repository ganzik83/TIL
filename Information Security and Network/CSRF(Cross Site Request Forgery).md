# CSRF(Cross Site Request Forgery)

<https://ko.wikipedia.org/wiki/%EC%82%AC%EC%9D%B4%ED%8A%B8_%EA%B0%84_%EC%9A%94%EC%B2%AD_%EC%9C%84%EC%A1%B0>

사이트 간 요청 위조(또는 크로스 사이트 요청 위조, 영어: Cross-site request forgery, CSRF, XSRF)는 웹사이트 취약점 공격의 하나로, 사용자가 자신의 의지와는 무관하게 공격자가 의도한 행위(수정, 삭제, 등록 등)를 특정 웹사이트에 요청하게 하는 공격을 말한다.

유명 경매 사이트인 옥션에서 발생한 개인정보 유출 사건에서 사용된 공격 방식 중 하나다.

사이트 간 스크립팅(XSS)을 이용한 공격이 사용자가 특정 웹사이트를 신용하는 점을 노린 것이라면, 사이트간 요청 위조는 특정 웹사이트가 사용자의 웹 브라우저를 신용하는 상태를 노린 것이다. 일단 사용자가 웹사이트에 로그인한 상태에서 사이트간 요청 위조 공격 코드가 삽입된 페이지를 열면, 공격 대상이 되는 웹사이트는 위조된 공격 명령이 믿을 수 있는 사용자로부터 발송된 것으로 판단하게 되어 공격에 노출된다.

---

## 공격 과정

1. 이용자는 웹사이트에 로그인하여 정상적인 쿠키를 발급받는다
2. 공격자는 다음과 같은 링크를 이메일이나 게시판 등의 경로를 통해 이용자에게 전달한다.
   http://www.geocities.com/attacker
3. 공격용 HTML 페이지는 다음과 같은 이미지태그를 가진다.

```bash
img src= "https://travel.service.com/travel_update?.src=Korea&.dst=Hell"
```

해당 링크는 클릭시

4. 정상적인 경우 출발지와 도착지를 등록하기위한 링크이다. 위의 경우 도착지를 변조하였다.
5. 이용자가 공격용 페이지를 열면, 브라우저는 이미지 파일을 받아오기 위해 공격용 URL을 연다.
   이용자의 승인이나 인지 없이 출발지와 도착지가 등록됨으로써 공격이 완료된다. 해당 서비스 페이지는 등록 과정에 대해 단순히 쿠키를 통한 본인확인 밖에 하지 않으므로 공격자가 정상적인 이용자의 수정이 가능하게 된다.

```

사이트간 요청위조 = 크로스 사이트 요청위조 = CSRF(Cross-Site Request Forgery)
요청을 받은 서버측 프로그램이,
요청 주체와 요청 절차를 검증하지 않고 요청을 처리했을 때 발생

[ 입력 화면 ]                           [ 처리 ]
패스워드 변경 요청                      패스워드 변경 처리
changePwForm.jsp  --------------------> changePwProc.jsp
                                       1) 인증 여부를 확인 (로그인했는지?)
New PW : _______                       2) 변경에 필요한 정보가 전달되었는지 확인
New PW : _______                          (New PW)
         [ 변경 ]                      3) 세션으로부터 변경 대상 정보를 추출
                                       4) loginUser.pw ← newpw update


[ 게시판 ( ]
꼭 보세요. 아주 중요해요.
-----------------------------------------------------------------------
<iframe src="changePwProc.jsp?newpw=123" width="0" height="0"></iframe>

```

---

## 외부 링크

gmail hijack : <http://www.gnucitizen.org/blog/google-gmail-e-mail-hijack-technique/>  
xsrf in adsl router : <http://www.webappsec.org/projects/whid/byid_id_2008-05.shtml>  
cracking simple anti-xsrf (in zeroboard 4.1 bbs)  
xsrf in web services (in zeroboard 4.1 bbs admin)  
<https://web.archive.org/web/20090107050121/http://x82.inetcop.org/h0me/papers/web2.0-csrf.pdf>

<https://terms.naver.com/entry.nhn?docId=3431919&cid=58437&categoryId=58437>
