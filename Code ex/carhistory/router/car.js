const express = require('express');
const fs = require('fs');
const router = express.Router();

var sampleCarList = [];
let rawdata = fs.readFileSync("data/carlist.json");
// // sampleUserList에 JSON 형식을 parse해서 입력한다.
sampleCarList = JSON.parse(rawdata);

// writeFile은 비동기 함수이다. 그래서 writeFileSync라는 동기 함수를 사용
// sampleUserList는 객체이기 때문에 JSON.stringify로 형변환(자바스크립트 객체 -> JSON 형식) 시켜서 저장해준다.
//fs.writeFileSync('data/carlist.json', JSON.stringify(sampleCarList, null, 2));
// console.log(JSON.stringify(sampleCarList));
// fs.writeFileSync('data/carlist.json', JSON.stringify(sampleCarList));
// if(fs.existsSync('data/userlist.json')){}



// session 값으로 인증
router.get("/list", (req, res) => {
    // console.log(req.session.user.username);
    // req.session.user.username을 하면 username이 undefined 되었다고 에러를 나타낸다. user 값 자체가 없는데 거기에 username까지 요구하기 때문이다. req.session.user까지만 사용하면 정상 작동하게 된다.
    if (req.session.user) {
        console.log("로그인된 사용자 접근");
        res.render("carlist.ejs", {
            carlist: sampleCarList
        });
    } else {
        console.log("로그인 안된 사용자 접근");
        res.send(
            `<script type="text/javascript">var choice = confirm("회원가입을 해야 접근 가능합니다. 회원가입 하시겠습니까?"); if(choice) {location.href = "/users/signup"} else {location.href = "/"}</script>`
        );
    }
});




router.get("/api/list", (req, res) => {
    res.json(sampleCarList);
});

router.post("/api/reg", (req, res) => {
    console.log(req.body);
    sampleCarList.push(req.body);
    res.json([req.body]);
});

router.delete("/api/del", (req, res) => {
    console.log(req.body);
});

router.post("/api/search", (req, res) => {
    console.log(req.body);
    console.log(req.body.inputText);

    let carNum = req.body.inputText;

    // 배열의 find 함수를 활용
    let found = sampleCarList.find(element => {
        console.log("element = ", element);
        if (element.carNumber == carNum) {
            console.log("found");
            return element;
        }
    });
    console.log("found = ", found);

    res.json(found);
});

router.post("/api/filter", (req, res) => {
    console.log(req.body);
    console.log(req.body.inputText);
    console.log(req.body.selectVal);

    let inputData = req.body.inputText;
    let selectVal = req.body.selectVal;

    // 배열의 find 함수를 활용
    let found = sampleCarList.filter(element => {
        // 만약 콤보박스 셀렉트 밸류가 어떤것인지 확인 후 데이터처리
        if (selectVal == "company") {
            // console.log("element = ", element);
            if (element.company == inputData) {
                // console.log("found");
                return element;
            }
        } else if (selectVal == "model") {
            // console.log("element = ", element);
            if (element.model == inputData) {
                // console.log("found");
                return element;
            }
        }
    });
    console.log("found = ", found);

    res.json(found);
});

module.exports = router;