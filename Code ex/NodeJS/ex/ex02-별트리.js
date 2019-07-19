var output = '';

for (var i = 0; i <= 10; i++) {
    for (j = 0; j < i; j++) {
        output += "*";
    }
    // html 문서가 아니기 때문에 <br>태그가 먹지 않는다
    // output += "<br>"

    output += "\n"
}

// document는 브라우저에서 제어하는 것이므로 서버사이드에서 실행하면 작동하지 않는다
// node를 실행시키고 document를 입력하면 ReferenceError: document is not defined 오류를 나타낸다
// document.write(output);

console.log(output);