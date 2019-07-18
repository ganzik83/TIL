module.exports = (express) => {
    const router = express.Router();

    router.get('/', (req, res, next) => {
        res.render('index.ejs', {
            title: 'GANZIK'
        });
    });
    return router;
};