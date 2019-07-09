module.exports = (app, fs, hasher) => {
    app.get('/', (req, res) => {
        res.render('index.ejs', {
            title: 'carhistory',
            length: 5,
        });
    });

    app.get('/login', (req, res) => {
        res.render('login.ejs')
    })

    // session은 로그인과 관련된 것에 사용을 하고, cookie는 장바구니 같은 곳에 사용을 한다
    /*
    // cookie 값을 이용
    app.post('/login', (req, res) => {
        // cookie의 이름(key값을) 설정해야 작동한다. cookie 기한도 설정 할 수 있다
        res.cookie('user', req.body, {
            maxAge: 2000,
            httpOnly: true
        });
        res.redirect('/carlist');
    })


    // session 값으로 저장
    app.post('/login', (req, res) => {
        req.session.myname = req.body.username;

        req.session.save(function () {
            res.redirect('/carlist2');
        })
    })
    */

    app.post('/login', (req, res) => {
        console.log(req.body);
        let username = req.body.username;
        let password = req.body.password;
        console.log('username = ', username);
        console.log('password = ', password);
        console.log('userlist = ', sampleUserList);
        let bFound = false;

        for (let i = 0; i < sampleUserList.length; i++) {

            let user = sampleUserList[i];
            console.log(sampleUserList[i]);
            if (username === user.username) {
                console.log('[found] username = ', username);
                bFound = true;

                return hasher({
                    password: password,
                    salt: user.salt
                }, function (err, pass, salt, hash) {
                    if (err) {
                        console.log('ERR : ', err);
                        //req.flash('fmsg', '오류가 발생했습니다.');

                    }
                    if (hash === user.password) {
                        console.log('INFO : ', username, ' 로그인 성공')

                        req.session.user = sampleUserList[i];
                        req.session.save(function () {
                            res.redirect('/carlist2');
                        });
                        return;
                    } else {
                        console.log('Password incorrect');
                        res.redirect('/login');
                        // req.flash('fmsg', '패스워드가 맞지 않습니다.');

                    }
                });
            }
            if (bFound) break;
        }

        //req.flash.msg('')
        if (!bFound) {
            console.log(username + ' user not found');
        }

        //req.flash('fmsg', '사용자가 없습니다.');
        res.redirect('/login');


    });

    /*
    // cookie 값으로 인증
    app.get('/carlist', (req, res) => {
        console.log(req.cookies);
        res.render('carlist.ejs', {
            carlist: sampleCarList,
            cookie: req.cookies
        })
    })
    */

    app.get('/signup', (req, res) => {
        res.render('signup.ejs')
    })


    app.post('/signup', (req, res) => {
        console.log(req.body);
        // 회원가입
        let username = req.body.username;
        let password = req.body.password;
        let name = req.body.name;
        let email = req.body.email;
        console.log('username = ', username);
        console.log('password = ', password);
        console.log('name = ', name);
        console.log('email = ', email);

        hasher({
            password: req.body.password
        }, (err, pass, salt, hash) => {
            if (err) {
                console.log('ERR: ', err);
                res.redirect('/signup');
            }
            let user = {
                username: username,
                password: hash,
                salt: salt, // 복호화 할 때 salt값이 필요
                name: name,
                email: email
            }
            sampleUserList.push(user);
            console.log('user added : ', user);
            // 회원가입이 끝나고 login 페이지로 이동
            res.redirect('/login');
        });
    });

    // session 값으로 인증
    app.get('/carlist2', (req, res) => {
        console.log(req.session.user.username);
        res.render('carlist2.ejs', {
            carlist: sampleCarList,
            myname: req.session.user.username
        })
    })


    /*
    app.post('/api/signup', (req, res) => {
        console.log(req.body);
        userList.push(req.body);
        res.redirect('/carlist');
    })
    */



    /*
    app.get('/carlist', (req, res) => {
        res.render('carlist.html')
    })


    app.get('/carlist2', (req, res) => {
        // carlist 키 값에 sampleCarList 값을 넣어 객체에 담는다. carlist2.html 페이지에서 carlist 변수를 사용하여 접근 가능하다 
        res.render('carlist2.html', {
            carlist: sampleCarList
        })
        // console.log(sampleCarList);
    })
    */
    var sampleUserList = [];

    var sampleCarList = [{
        carNumber: '11주1111',
        owner: '홍길동',
        model: 'SONATA',
        company: 'HYUNDAI',
        numOfAccident: 2,
        numOfOwnerChange: 1
    }, {
        carNumber: '22주2222',
        owner: '손오공',
        model: 'MORNING',
        company: 'KIA',
        numOfAccident: 1,
        numOfOwnerChange: 3
    }];

    app.get('/api/carlist', (req, res) => {
        res.json(sampleCarList);
    })

    app.post('/api/regcar', (req, res) => {
        console.log(req.body);
        sampleCarList.push(req.body);
        res.json([req.body]);
    });

    app.delete('/api/delcar', (req, res) => {
        console.log(req.body);
    })

    // cookie와 session
    app.get('/test/setcookie', (req, res) => {
        console.log('/test/setCookie')

        res.cookie('user', {
            'name': '홍길동',
            'id': 'user01'
        });

        res.redirect('/test/getCookie')

    });

    app.get('/test/getcookie', (req, res) => {
        console.log(req.cookies)

        res.render('test/getcookie.html', {
            cookie: req.cookies
        })
    });


    app.get('/test/setsession', (req, res) => {
        console.log('/test/setsession');

        req.session.myname = '홍길동';
        req.session.myid = 'hong'

        // 세션이 다 저장된 다음에 리다이렉트를 하라
        req.session.save(function () {
            res.redirect('/test/getsession');
        })
    })

    app.get('/test/getsession', (req, res) => {
        console.log('/test/getsession');
        console.log('session.myname = ', req.session.myname);

        res.render('test/getsession.html', {
            myname: req.session.myname,
            myid: req.session.myid
        });
    })


}