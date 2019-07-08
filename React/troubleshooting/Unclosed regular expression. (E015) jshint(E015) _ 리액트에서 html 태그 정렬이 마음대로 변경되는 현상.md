# Unclosed regular expression. (E015) jshint(E015)

VScode에서 jshint사용시 리액트 js 문서에서 html 태그 정렬이 마음대로 변경되는 현상

## 해결 방법

프로젝트 루트 디렉터리에 `.jshintrc`파일을 생성하고 아래 코드를 입력한다

```js
{
    "esversion": 6
}
```

VScode를 재시작하면 정상적으로 작동한다.
