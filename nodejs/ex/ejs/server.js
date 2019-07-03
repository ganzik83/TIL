const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.set('views', path.join(__dirname, 'veiws'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.urlencoded({
    extended: false // querystring 모듈 사용
}))

app.use(express.static(path.join(__filename, 'public')))

app.listen(port, () => {
    console.log('Server listening ...' + port);
})