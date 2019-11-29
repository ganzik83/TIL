# 리액트 네이티브 디버깅 [React Native Debugging]

react-native-debugger + redux-devtools (feat. react-native-debugger-open)

## 1. React-native-debugger 설치 및 실행

<https://github.com/jhen0409/react-native-debugger?source=post_page-----7e46bfe89f6----------------------#installation>

```sh
brew update && brew cask install react-native-debugger
```

## 2. Redux-devtools 설치

```sh
yarn add redux-devtools-extension
```

리덕스 store.js 파일을 열어 아래 내용 추가

```js
import { composeWithDevTools } from 'redux-devtools-extension';

//Before
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
  // other store enhancers if any
);
//After
const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(...middleware)
    // other store enhancers if any
  )
);
```

## 3. 3. 개발자 도구를 react-native-debugger로 여는 react-native-debugger-open

```sh
yarn add react-native-debugger-open --save-dev
```

`package.json` 파일에 아래 코드 추가

```json
"scripts": {
  "postinstall": "rndebugger-open"
}
```

```sh
yarn postinstall

# 아래 결과가 나타나면 설치 완료
PASS Replace `open debugger-ui with Chrome` to `open React Native Debugger`.
```

리액트 네이티브 프로젝트를 실행시키고 Debug js Remote를 하면 자동으로 열리게 된다
