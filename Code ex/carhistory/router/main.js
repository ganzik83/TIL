module.exports = (app, fs) => {
    app.get('/', (req, res) => {
        res.render('index', {
            title: 'carhistory',
            length: 5,
        });
    });

    app.get('/main', (req, res) => {
        res.render('main.ejs', {
            carlist: sampleCarList
        })
    })

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

    });

    app.get('/test/getCookie', (req, res) => {

    });

}