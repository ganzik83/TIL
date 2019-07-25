const express = require("express");
const app = express();
const port = 3000;

app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());

const mysqlRouter = require("./routes/mysqlrouter");
app.use("/api/mysql", mysqlRouter);

app.listen(port, () => {
  console.log("Server listening...", port);
});
