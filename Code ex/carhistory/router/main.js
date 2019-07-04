module.exports = (app, fs) => {
    app.get('/', (req, res) => {
        res.render('index', {
            title: 'carhistory',
            length: 5,
        });
    });
}