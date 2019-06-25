# CSS Layout width and Max-width

CSS 블록레벨 요소인 width 요소와 max-width 요소의 차이점에 대해 알아보자

width 요소는 지정한 크기로 고정되어 브라우저 가로 해상도가 width값보다 작아질 경우 블록요소를 가리게 되며 가로 스크롤 막대가 생성된다.

max-width는 브라우저 가로 픽셀이 낮아지면 블록 요소가 반응형으로 움직인다

아래 예시를 비교해서 width 요소와 max-width 요소의 차이점을 비교해보자

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>width and max-width</title>
    <style>
      #width {
        width: 700px;
        margin: auto;
        border: 3px solid rgb(103, 151, 255);
      }

      #max-width {
        max-width: 700px;
        margin: auto;
        border: 3px solid rgb(103, 151, 255);
      }
    </style>
  </head>

  <body>
    <div id="width">
      이 블록은 width 요소를 가졌고 너비는 700픽셀입니다. 마진 값은 자동으로
      설정됩니다.
    </div>
    <br />
    <div id="max-width">
      이 블록은 max-width 요소를 가졌고 너비는 700픽셀입니다. 마진 값은 자동으로
      설정됩니다.
    </div>
  </body>
</html>
```

![css compare with width and max-width](./imgs/css-max-width.png)
브라우저 너비가 700px 이상일 때 차이가 없다

![css compare with width and max-width](./imgs/css-max-width1.png)
브라우저 너비가 700px 이하일 때 width 요소와 max-width 요소의 차이를 볼 수 있다
