# web3에서 스마트계약

### helloworld.sol

```sol
pragma solidity ^0.4.25;

// 계약 선언
contract HelloWorld {
	// 상태 변수 선언
	string public greeting;
	address public msgSender;

    // 이벤트 선언
	event EventSetGreeting(string greeting);

	// 생성자
	constructor(string memory _greeting) public {
		greeting = _greeting;
	}

	// 함수 정의
	function setGreeting(string memory _greeting) public returns(uint){
		greeting = _greeting;
		emit EventSetGreeting(_greeting);
		return msg.sender;
	}
	function say() public view returns (string memory) {
		return greeting;
	}
}

```

remix ide에서 배포 후 계약 주소와 ABI를 helloworld.html에 변수로 담는다.

### helloworld.html

```html
<!-- 상태 변수 greeting을 변경할 경우, 변경한 사용자의 계정 정보를 함게 반환하도록 수정 -->

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <script src="https://cdn.jsdelivr.net/gh/ethereum/web3.js@0.20.6/dist/web3.js"></script>

    <!-- jquery 라이브러리 가져오기 -->
    <script
      src="https://code.jquery.com/jquery-3.4.1.min.js"
      integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
      crossorigin="anonymous"
    ></script>

    <!-- bootstrap js 라이브러리 가져오기 -->
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
      integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
      crossorigin="anonymous"
    ></script>

    <!-- bootstrap css 라이브러리 가져오기 -->
    <link
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div class="container">
      <!-- title -->
      <div class="row">
        <h1>Hello World</h1>
      </div>

      <div class="row">
        <div class="input-group">
            <label class="input-group-text" for="greeting">메시지</label>
            <input class="form-control" type="text" id="greeting">
            <div class="input-group-append">
                <button type="button" class="btn btn-primary" id="btnSetGreeting">인사말 설정</button>
            </div>
        </div>
      </div>

      <!-- 스마트 계약 내부에 설정된 인사말을 확인 -->
      <div class="row">
        <button type="button" class="btn btn-secondary" id="btnGetGreeting">인사말 확인</button>
      </div>

      <!-- 인사말 설정시에는 트랜젝션 생성 결과를, 인사말 확인시에는 인사말을 출력 -->
      <div class="row">
        <div id="divMsg" class="alert alert-dark"></div>
      </div>

    <script>
      var Web3 = require("web3");
      web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

      console.log(web3.isConnected());

    // 블록체인 내부에 배포된 스마트 계약의 인스턴스를 생성
    // var _greeting = /* var of type string here */ ;

    // ABI_ARRAY_STRING
    const ABI_ARRAY_STRING = [{"constant":true,"inputs":[],"name":"say","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_greeting","type":"string"}],"name":"setGreeting","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"greeting","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_greeting","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"greeting","type":"string"},{"indexed":false,"name":"setter","type":"address"}],"name":"EventSetGreeting","type":"event"}];

var helloworldContract = web3.eth.contract(ABI_ARRAY_STRING);

// CA (계약 주소)
const CONTRACT_ADDRESS = "0x426d0e68f70599AeC00a4e44FB70465A5cDaa184"
let hc = helloworldContract.at(CONTRACT_ADDRESS);


    $(function(){
        // 인사말 설정 버튼을 클릭 한 경우
$('#btnSetGreeting').click(function(){
    // let greeting = document.getElementById("greeting").value;
    let greeting = $('#greeting').val();


    hc.setGreeting.sendTransaction(greeting, {
    from: web3.eth.accounts[0], gas: 1000000
}, function(error, result){
    if(!error){
        console.log(result)
        $('#divMsg').attr('class', 'alert alert-success')
        $('#divMsg').text(`${result} 트래넥션이 등록되었습니다.`)
    } else {
        console.error(error)
        $('#divMsg').attr('class', 'alert alert-danger')
        $('#divMsg').text(`${error}`)
    }
} )
})
        // 인사말 확인 버튼을 클릭 한 경우
        $('#btnGetGreeting').click(function(){
            console.log(hc.say())
            let msg = hc.say()
            $('#divMsg').text(msg);
        })
    })

    // 계약에서 생성한 이벤트를 감지(감시). 이벤트 발생시 실행
    hc.EventSetGreeting().watch(function(error, result){
        if(!error){
            console.log(result)
        $('#divMsg').attr('class', 'alert alert-success')
        $('#divMsg').text(JSON.stringify(result))
        // $('#divMsg').text(result.args.greeting)
        }else {
            console.error(error)
        $('#divMsg').attr('class', 'alert alert-danger')
        $('#divMsg').text(`${error}`)
        }
    })

    </script>
  </body>
</html>

```
