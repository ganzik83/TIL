# react-native-dotenv 환경설정

<https://github.com/zetachang/react-native-dotenv>

## 설치

```sh
yarn add react-native-dotenv -E -D
```

root디렉토리의 babel.config.js 파일 아래와 같이 코드 삽입

```js
module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    'module:react-native-dotenv'
  ]
};
```

## 사용

.env파일 생성하여 환경 변수 삽입

```env
API_SERVER=https://foo.com
```

컴포넌트에서 import하여 사용

```js
import { API_SERVER } from 'react-native-dotenv';

console.log(API_SERVER); // https://foo.com을 반환
```
