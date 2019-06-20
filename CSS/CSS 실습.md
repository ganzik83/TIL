# CSS Login 페이지 실습

![css log in form](./imgs/csslogin.png)

위와 같이 로그인 폼을 만드시오

---

시간내에 작성을 다 하지 못해서 미완성이지만 내가 작성 한 것

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>login</title>

    <style>
      body {
        text-align: center;
      }

      #center {
        border: 1px solid whitesmoke;
        background-color: whitesmoke;
        box-shadow: 0px 2px 1px lightgray;
        margin: auto;
        width: 350px;
        height: 280px;
      }

      #title {
        font-size: 30px;
        margin: 20px;
      }

      #button {
        background-color: rgb(43, 147, 211);
        width: 290px;
        height: 35px;
        margin: 5px;
      }

      #user,
      #passwd {
        width: 290px;
        height: 35px;
        margin: 5px;
      }
    </style>
  </head>

  <body>
    <div id="center">
      <div id="title">Log in</div>
      <input type="text" placeholder="Username" id="user" /><br />
      <input type="password" placeholder="Password" id="passwd" /><br />
      <input type="button" id="button" value="Log in" /><br />
      <span><input type="checkbox" name="keep" />Remember me</span>
      <span name="find">Forget Password?</span>
    </div>
    <p style="color: rgb(43, 147, 211)">Create an Account</p>
  </body>
</html>
```

![css login form 실습](./imgs/csslogin1.png)
