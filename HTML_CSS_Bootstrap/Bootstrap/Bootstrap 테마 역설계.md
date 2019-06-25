# 부트스트랩 테마 역설계 해보기

<https://startbootstrap.com/previews/freelancer/>

위 페이지를 보고 부트스트랩을 이용해서 역설계 해보기

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <!-- Bootstrap CSS -->
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />

    <title>Hello, world!</title>
    <style>
      #main {
        margin: 0 auto;
        background-color: rgb(63, 177, 152);
        color: white;
        text-align: center;
      }

      #navbar,
      #menu {
        background-color: rgb(46, 46, 53);
        height: 60px;
        color: white;
        line-height: 60px;
        text-align: center;
      }

      #profile {
        width: 200px;
        height: 200px;
        margin: 0 auto;
      }

      #portfolio {
        text-align: center;
      }

      .image-height {
        height: 200px;
        line-height: 200px;
      }
    </style>
  </head>

  <body>
    <header>
      <div class="row" class="container-fluid" id="navbar">
        <div class="col-sm-4" id="logo">START BOOTSTRAP</div>
        <div class="col-sm-1"></div>
        <div class="col-sm-6" id="menu">
          <div class="row">
            <div class="col">PORTFOLIO</div>
            <div class="col">ABOUT</div>
            <div class="col">CONTACT</div>
          </div>
          <div class="col-sm-1"></div>
        </div>
      </div>
    </header>
    <article>
      <div class="jumbotron" id="main">
        <div id="profile">
          <p>프로필 사진</p>
        </div>
        <h1>START BOOTSTRAP</h1>
        <p>----- * -----</p>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
      <div id="portfolio">
        <p></p>
        <h1>PORTFOLIO</h1>
        <p>----- * -----</p>
        <div class="container">
          <div class="row">
            <div class="col image-height">image1</div>
            <div class="col image-height">image2</div>
            <div class="col image-height">image3</div>
            <div class="w-100"></div>
            <div class="col image-height">image4</div>
            <div class="col image-height">image5</div>
            <div class="col image-height">image6</div>
          </div>
        </div>
      </div>
      <div>
        <p></p>
        <h1>ABOUT</h1>
        <p>----- * -----</p>
        <div class="container row">
          <div class="col">
            <p>
              Freelancer is a free bootstrap theme created by Start Bootstrap.
              The download includes the complete source files including HTML,
              CSS, and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div class="col">
            <p>
              You can create your own custom avatar for the masthead, change the
              icon in the dividers, and add your email address to the contact
              form to make it fully functional!
            </p>
          </div>
          <div>
            <button type="button" class="btn btn-outline">
              Free Download!
            </button>
          </div>
        </div>
      </div>
    </article>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script
      src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
      integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
      integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```
