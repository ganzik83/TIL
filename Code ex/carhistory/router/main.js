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


    app.get('/api/carlist', (req, res) => {
        var sampleCarList = fs.readFile(__dirname + "/../data/" + "carlist.json", 'utf8', (err, data) => {
            console.log(data);
            res.end(data);
        })
        res.json(sampleCarList);
    })

    app.post('/api/regcar', (req, res) => {
        console.log(req.body);
        sampleCarList.push(req.body);
        res.json(sampleCarList);
    });


}