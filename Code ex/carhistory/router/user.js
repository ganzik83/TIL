const express = require('express');
const fs = require('fs');
const hasher = require('pbkdf2-password')();
const router = express.Router();

var userList = {};
let rawdata = fs.readFileSync("data/userlist.json");
// sampleUserList에 JSON 형식을 parse해서 입력한다.
userList = JSON.parse(rawdata);
// console.log(sampleUserList);

// writeFile은 비동기 함수이다. 그래서 writeFileSync라는 동기 함수를 사용
// sampleUserList는 객체이기 때문에 JSON.stringify로 형변환(자바스크립트 객체 -> JSON 형식) 시켜서 저장해준다.
// fs.writeFileSync('data/userlist.json', JSON.stringify(sampleUserList, null, 2));
// if(fs.existsSync('data/userlist.json')){}

router.get("/login", (req, res) => {
    res.render("login.ejs", {
        fmsg: req.flash("fmsg")
    });
});

router.post("/login", (req, res) => {
    console.log(req.body);
    let username = req.body.username;
    let password = req.body.password;
    let user = userList[username];
    console.log("username = ", username);
    console.log("password = ", password);
    console.log("userlist = ", userList);
    console.log(user);

    // 회원 정보가 sampleUserList에 존재 한다면
    if (user) {
        hasher({
                password: password,
                salt: user.salt
            },
            function (err, pass, salt, hash) {
                if (err) {
                    console.log("ERR : ", err);
                    req.flash("fmsg", "오류가 발생했습니다.");
                }
                if (hash === user.password) {
                    console.log("INFO : ", username, " 로그인 성공");

                    req.session.user = userList[username];
                    req.session.save(function () {
                        res.redirect("/car/list");
                    });
                    return;
                } else {
                    console.log("Password incorrect");
                    req.flash("fmsg", "패스워드가 맞지 않습니다.");
                    res.redirect("/user/login");
                }
            }
        );
    } else {
        // 회원 정보가 sampleUserList에 존재 하지 않는다면
        req.flash("fmsg", "회원 정보가 없습니다");
        res.redirect("/user/login");
    }
});

router.get("/logout", (req, res) => {
    req.session.destroy(); // 세션 삭제
    res.clearCookie("sid"); // 세션 쿠키 삭제
    res.redirect("back"); // 현재 페이지로 리다이렉트

    // 세션의 유저값만 삭제
    // if (req.session.user) {
    //  delete req.session.user;
    // }
});

router.get("/signup", (req, res) => {
    res.render("signup.ejs", {
        fmsg: req.flash("fmsg")
    });
});

// 회원가입 입력 폼을 받아 데이터를 저장
router.post("/signup", (req, res) => {
    console.log(req.body);
    let username = req.body.username;
    let password = req.body.password;
    let name = req.body.name;
    let email = req.body.email;
    let user = userList[username];
    console.log("username = ", username);
    console.log("password = ", password);
    console.log("name = ", name);
    console.log("email = ", email);

    if (!user) {
        hasher({
                password: req.body.password
            },
            (err, pass, salt, hash) => {
                if (err) {
                    console.log("ERR: ", err);
                    res.redirect("/user/signup");
                }
                let user = {
                    username: username,
                    password: hash,
                    salt: salt, // 복호화 할 때 salt값이 필요
                    name: name,
                    email: email
                };

                //if (fs.existsSync('data/userlist.json')) {
                // sampleUserList.push(user); //배열을 사용 할 때는 push 메소드를 사용

                userList[username] = user;

                fs.writeFileSync(
                    "data/userlist.json",
                    JSON.stringify(userList, null, 2)
                );
                console.log("user added : ", user);
                // 회원가입이 끝나고 login 페이지로 이동
                res.redirect("/user/login");
                // }
            }
        );
    } else {
        req.flash("fmsg", "존재하는 회원입니다");
        res.redirect("/user/signup");
    }
});

module.exports = router;