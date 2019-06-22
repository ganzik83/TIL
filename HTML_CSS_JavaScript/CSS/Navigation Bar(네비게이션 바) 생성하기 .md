# 네비게이션 바 생성하기

쉽게 사용 가능한 네비게이션 바는 웹사이트에 정말 중요하다. CSS를 이용하면 지루한 HTML 메뉴를 보기 좋은 네비게이션 바로 변환해준다.

## 링크를 가진 리스트를 이용하여 네비게이션 바를 만들자

네비게이션 바는 기본적으로 표준 HTML을 필요로 한다

HTML 리스트 요소를 이용하여 간단한 리스트를 만들자

```html
<ul>
  <li><a href="/index.html">Home</a></li>
  <li><a href="/blog.html">Blog</a></li>
  <li><a href="/portfolio.html">Portfolio</a></li>
  <li><a href="/about.html">About</a></li>
</ul>
```

![navgation bar](./imgs/navbar.png)
링크를 가진 리스트가 생성되었다.

이제 리스트에서 검은점과 마진값 패딩값을 제거해주자

```css
ul {
  list-styl-type: none;
  margin: 0;
  padding: 0;
}
```

![navgation bar](./imgs/navbar1.png)

## 세로 네비게이션 바 만들기

네비게이션 바를 만들기 위해 각 리스트의 링크 요소인 \<a> 태그를 아래와 같이 속성값을 지정해주자

```css
li a {
  /* 버튼을 클릭 했을 때 텍스트가 아닌 빈공간에서도 링크가 작동하도록 블록으로 만들어준다 */
  display: block;
  /* display: block; 값을 지정하면 width값이 100%를 갖게 된다. 원하는 사이즈로 지정하자 */
  width: 60px;
}
```

### 스타일 색상을 입혀주자

```css
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
}

li a {
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
}

/* Change the link color on hover */
li a:hover {
  background-color: #555;
  color: white;
}
```

![navgation bar](./imgs/navbar2.png)
