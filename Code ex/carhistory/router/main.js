module.exports = (app, fs) => {
    app.get('/', (req, res) => {
        res.render('index.ejs', {
            title: 'carhistory',
            length: 5,
        });
    });

    app.get('/login', (req, res) => {
        res.render('login.ejs', {
            cookie: req.cookies
        })
    })

    app.post('/login', (req, res) => {
        // cookie의 이름(key값을) 설정해야 작동한다
        res.cookie('user', req.body);
        res.redirect('/carlist');
    })

    app.get('/carlist', (req, res) => {
        console.log(req.cookies);
        res.render('carlist.ejs', {
            carlist: sampleCarList,
            cookie: req.cookies
        })
    })

    app.get('/signup', (req, res) => {
        res.render('signup.ejs', {
            cookie: req.cookies
        })
    })

    app.post('/api/signup', (req, res) => {
        console.log(req.body);
        userList.push(req.body);
        res.redirect('/carlist');
    })



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
    var userList = [{
        'name': '홍길동',
        'password': '1234',
        'id': 'user01'
    }, {
        'name': '김기홍',
        'password': '0918',
        'id': 'user01'
    }];

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
    app.get('/test/setCookie', (req, res) => {
        console.log('/test/setCookie')

        res.cookie('user', {
            'name': '홍길동',
            'id': 'user01'
        });

        res.redirect('/test/getCookie')

    });

    app.get('/test/getCookie', (req, res) => {
        console.log(req.cookies)

        res.render('test/getcookie.html', {
            cookie: req.cookies
        })
    });

}