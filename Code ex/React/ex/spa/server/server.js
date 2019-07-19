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

app.use("/api", apiRouter);

app.listen(port, () => {
  console.log("Server listening...", port);
});
