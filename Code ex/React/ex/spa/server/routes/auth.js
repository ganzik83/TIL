const express = require("express");
const mysql = require("mysql");
const dbconfig = require("./dbconfig");
const bcrypt = require("bcryptjs");

const connection = mysql.createConnection(dbconfig);
connection.connect();
// <https://stackoverflow.com/questions/14087924/cannot-enqueue-handshake-after-invoking-quit>

module.exports = () => {
  const router = express.Router();

  router.post("/login", (req, res) => {
    console.log("Connected login API");

    let userid = req.body.userid;
    const hash = bcrypt.hashSync(req.body.password, 8);

    const stmt = `SELECT * FROM user WHERE userid = ? `;
    connection.query(stmt, [userid], (error, results, fields) => {
      if (error) throw error;
      console.log("The solution is: ", results);

      if (results) {
        const user = results[0];
        let password = bcrypt.compareSync(user.password, hash);
        console.log(userid, "정보가 존재합니다");
        console.log(user);
        console.log(user.password);
        console.log(password);
        if (password === user.password) {
          console.log("로그인 성공");
          res.send("로그인 성공");
        } else {
          console.log("패스워드가 맞지 않습니다");
          res.send("패스워드가 맞지 않습니다");
        }
      } else {
        res.send("유저 정보가 존재하지 않습니다");
      }
      res.json(results);
    });

    router.get("/getuser", (req, res) => {
      console.log("database connected");

      connection.query("SELECT * FROM user", function(error, results, fields) {
        if (error) throw error;
        console.log("The solution is: ", results[0].solution);
        res.json(results);
      });
    });
  });
  return router;
};
