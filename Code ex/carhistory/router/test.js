module.exports = (express, multer) => {
    const router = express.Router();

    // const upload = multer({
    //     dest: 'uploads/'
    // });

    var storage = multer.diskStorage({
        // 서버에 저장할 폴더
        destination: function (req, file, cb) {
            cb(null, 'uploads/');
        },
        // 서버에 저장할 파일명
        filename: function (req, file, cb) {
            // let prefix = 'my_';
            // req.file.newname = prefix + '_' + 'fda' + '_' + req.file.original;
            //cb(null, file.orignalname);

            cb(null, new Date().valueOf() + '_' + file.originalname);
        }
    });

    var upload = multer({
        storage: storage,
        limits: {
            files: 10,
            fileSize: 100 * 1024 * 1024
        }
    });



    router.get('/fileupload', (req, res) => {
        res.render('fileupload.ejs');
    });

    // 미들웨어로 upload를 사용 할 수 있다. single은 한 개의 파일만, '파일명 avata'를 보내주면 업로드 시켜준다.
    router.post('/fileupload', upload.single('avata'), (req, res, next) => {
        console.log(req.file);
        res.send('uploaded...' + req.file.filename);
    });

    router.get('/fileupload_multi', (req, res) => {
        res.render('fileupload_multi.ejs');
    });

    // 파일이 여러개로 들어오기 때문에 배열로 담고, photos에 담겨진 파일을 5개까지 허용한다.
    router.post('/fileupload_multi', upload.array('photos', 5), (req, res, next) => {
        console.log('완료')
        res.send('uploaded...');
    });


    return router;
};