const express = require("express");
const fs = require("fs");
const app = express();
const carlistRouter = require("./routes/carlistrouter")();
const mysqlRouter = require("./routes/mysqlrouter")();

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

app.use("/api/carlist", carlistRouter);
app.use("/api/mysql", mysqlRouter);

app.listen(port, () => {
  console.log("Server listening...", port);
});
