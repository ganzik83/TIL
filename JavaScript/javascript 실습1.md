# javascript 실습 - 2019-06-25

![javascript 실습 예제](./imgs/javascript2.png)

위와 같은 폼을 만들고 자바스크립트를 이용해서 계산하는 실습을 해보자

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <style>
      table,
      td {
        border: 1px solid black;
      }
    </style>
  </head>

  <body>
    <input
      type="text"
      name="name"
      id="name"
      placeholder="이름은 무엇인가요?"
    /><br />
    <input
      type="number"
      name="nlang"
      id="nlang"
      placeholder="국어 성적을 입력하시오"
    /><br />
    <input
      type="number"
      name="eng"
      id="eng"
      placeholder="영어 성적을 입력하시오"
    /><br />
    <input
      type="number"
      name="math"
      id="math"
      placeholder="수학 성적을 입력하시오"
    />
    <hr />
    총점: <span id="total"></span><br />
    평균: <span id="avg"></span><br />
    <button onclick="carculate()">계산</button>
    <script>
      function carculate() {
        var name = document.getElementById("name").value;
        console.log(name);
        var nlang = document.getElementById("nlang").value;
        console.log(nlang);
        var math = document.getElementById("math").value;
        console.log(math);
        var eng = document.getElementById("eng").value;
        console.log(eng);
        var total = Number(nlang) + Number(eng) + Number(math);
        console.log(total);
        var avg = total / 3;
        document.getElementById("total").innerHTML = total;
        document.getElementById("avg").innerHTML = avg;
      }
    </script>
  </body>
</html>
```
