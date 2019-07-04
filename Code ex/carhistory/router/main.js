module.exports = (app, fs) => {
    app.get('/', (req, res) => {
        res.render('index', {
            title: 'carhistory',
            length: 5,
        });
    });

    app.get('/carlist', (req, res) => {
        res.render('carlist.html')
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
        res.json(sampleCarList);
    });

}