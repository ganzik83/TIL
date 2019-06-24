# 부트스트랩 (bootstrap)

공식 웹사이트
<https://getbootstrap.com/>

한국어 메뉴얼 사이트
<http://bootstrapk.com/>

w3schools - bootstrap4 tutorial
<https://www.w3schools.com/bootstrap4/default.asp>

반응형 웹에 최적화 되어있다

## Bootstrap 4 is mobile-first

Bootstrap 4 is designed to be responsive to mobile devices. Mobile-first styles are part of the core framework.

To ensure proper rendering and touch zooming, add the following `<meta>` tag inside the `<head>` element:

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

The `width=device-width` part sets the width of the page to follow the screen-width of the device (which will vary depending on the device).

The `initial-scale=1` part sets the initial zoom level when the page is first loaded by the browser.

## 클래스 컨테이너

3. Containers

Bootstrap 4 also requires a containing element to wrap site contents.

There are two container classes to choose from:

1. The .container class provides a responsive fixed width container
2. The .container-fluid class provides a full width container, spanning the entire width of the viewport

```html
<div class="container">
  <h2>클래스 container</h2>
  <p>
    div 박스를 컨테이너에 담는다. 가운데 정렬을 하고 화면에 꽉차지 않는다. 아래
    container-flouid 클래스와 비교해보자
  </p>
</div>
```

```html
<div class="container-flouid">
<h2>클래스 container-flouid</h>
<p>화면 꽉 차게 div 박스를 지정한다.</p>
</div>
```

![bootstrap container 클래스](./imgs/bootstrap-container.png)

## 그리드 시스템 - Grid system

Bootstrap's grid system is built with flexbox and allows up to 12 columns across the page.

If you do not want to use all 12 columns individually, you can group the columns together to create wider columns:

![bootstrap-grid](./imgs/bootstrap-grid.png)

The grid system is responsive, and the columns will re-arrange automatically depending on the screen size.

Make sure that the sum adds up to 12 or fewer (it is not required that you use all 12 available columns).

### Grid Classes

The Bootstrap 4 grid system has five classes:

- `.col-` (extra small devices - screen width less than 576px)
- `.col-sm-` (small devices - screen width equal to or greater than 576px)
- `.col-md-` (medium devices - screen width equal to or greater than 768px)
- `.col-lg-` (large devices - screen width equal to or greater than 992px)
- `.col-xl-` (xlarge devices - screen width equal to or greater than 1200px)
  The classes above can be combined to create more dynamic and flexible layouts.

Tip: Each class scales up, so if you wish to set the same widths for `sm` and `md`, you only need to specify `sm`.

지정된 픽셀까지는 전체사이즈로 표시되다가 그 이하로 떨어지면 한줄씩 표시가 된다(반응형)  
예를 들어 `.col-sm-` 을 클래스 값으로 선언하면 576px 이하가 되면 표가 한줄씩 표현된다

### Grid layout

1. Three Equal Columns

The following example shows how to create three equal-width columns, on all devices and screen widths:

```html
<div class="row">
  <div class="col">one</div>
  <div class="col">two</div>
  <div class="col">three</div>
</div>
```

2. Responsive Columns

The following example shows how to create four equal-width columns starting at tablets and scaling to extra large desktops. On mobile phones or screens that are less than 576px wide, the columns will automatically stack on top of each other:

```html
<div class="row">
  <div class="col-sm-3">.col-sm-3</div>
  <div class="col-sm-3">.col-sm-3</div>
  <div class="col-sm-3">.col-sm-3</div>
  <div class="col-sm-3">.col-sm-3</div>
</div>
```
