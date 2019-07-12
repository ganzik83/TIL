module.exports = (express) => {
    const router = express.Router();

    router.get('/fileupload', (req, res) => {
        res.render('/fileupload.ejs');
    })

    router.post('/fileupload', (req, res) => {

    })



    return router;
};