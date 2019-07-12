const multer = require('multer');

module.exports = (express) => {
    const router = express.Router();

    const upload = multer({
        dest: 'uploads/'
    });

    router.get('/fileupload', (req, res) => {
        res.render('fileupload.ejs');
    });

    // 미들웨어로 upload를 사용 할 수 있다. single은 한 개의 파일만, '파일명 avata'를 보내주면 업로드 시켜준다.
    router.post('/fileupload', upload.single('avata'), (req, res) => {
        res.send('uploaded...', +req.file.filename);
    });



    return router;
};