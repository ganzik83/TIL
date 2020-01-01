# 이미지파일 blob으로 변경시 파일 사이즈 커지는 문제

RNFetchBlob을 사용하면 정상적으로 업로드 된다.
또한 ios는 path 지정을 잘 해주어야한다

```js
const upLoadCloud = async item => {
  // // 원본보다 사이즈가 크게 증가
  // try {
  //   const response = await fetch(item.uri);
  //   const blob = await response.blob();

  //   Storage.put(`photos/origin/${item.name}`, blob, {
  //     contentType: 'image/jpeg',
  //   }).then(result => console.log(result));
  // } catch (error) {
  //   console.log(error);
  // }

  const iosPath = () => {
    const dirs = RNFetchBlob.fs.dirs;
    return `${dirs.CacheDir}/Camera/${item.name}`;
  };

  const filePath = Platform.OS === 'android' ? item.uri : iosPath();
  console.log(filePath);

  RNFetchBlob.fs
    .readFile(filePath, 'base64')
    .then(data => new Buffer(data, 'base64'))
    .then(buffer => {
      Storage.put(`photos/origin/${item.name}`, buffer, {
        contentType: 'image/jpeg'
      }).then(result => console.log(result));
    });
};
```
