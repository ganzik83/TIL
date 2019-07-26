const express = require("express");
const fs = require("fs");
const app = express();
const carlistRouter = require("./routes/carlistrouter")();
const authRouter = require("./routes/auth")();
const userRouter = require("./routes/user")();
const cors = require("cors");

const port = 5000;

global.sampleCarList = [];

if (fs.existsSync("./data/carlist.json")) {
  let rawData = fs.readFileSync("./data/carlist.json");
  sampleCarList = JSON.parse(rawData);
  console.log(sampleCarList);
}

app.use(cors());
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());

app.use("/api/carlist", carlistRouter);
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log("Server listening...", port);
});
