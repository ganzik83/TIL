<<<<<<< HEAD
const express = require("express");
const fs = require("fs");
const app = express();
const apiRouter = require("./routes/apirouter")();

const port = 5002;

global.sampleCarList = [];

if (fs.existsSync("./data/carlist.json")) {
  let rawData = fs.readFileSync("./data/carlist.json");
  sampleCarList = JSON.parse(rawData);
  console.log(sampleCarList);
}

app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());

app.all("/*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use("/api", apiRouter);

app.listen(port, () => {
  console.log("Server listening...", port);
});
=======
const express = require('express');
const fs = rquire('fs');
const app = express();
const apiRouter = require('./routes/apirouter');

const port = 5002;
globalThis.sampleCarList =[];

if(fs.existsSync('./data/carlist.json')){
    let rawData = fs.readFileSync('./data/carlist.js');
    sampleCarList = JSON.parse(rawData);
    console.log(sampleCarList);
}

app.use(express.urlencoded({
    extended: false;
}));
app.use(express.json());

app.use('/api', apiRouter)

app.listen(port, ()=>{
    console.log('Server listening...', port);
});
>>>>>>> 771bd1a67c49b157c3d2a016503af3f8c30e3e50
