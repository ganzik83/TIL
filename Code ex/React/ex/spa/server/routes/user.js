const express = require("express");
const mysql = require("mysql");
const dbconfig = require("./dbconfig");
const bcrypt = require("bcryptjs");

const connection = mysql.createConnection(dbconfig);
connection.connect();
// <https://stackoverflow.com/questions/14087924/cannot-enqueue-handshake-after-invoking-quit>

module.exports = () => {
  const router = express.Router();

  router.post("/signup", (req, res) => {
    console.log("Connected signup API");

    let userid = req.body.userid;
    let email = req.body.email;
    let name = req.body.name;
    let password = bcrypt.hashSync(req.body.password, 8);

    const stmt = `INSERT INTO user (userid, email, name, password) VALUES (?, ?, ?, ?)`;
    connection.query(
      stmt,
      [userid, email, name, password],
      (error, results, fields) => {
        if (error) throw error;

        console.log("The solution is: ", results);
        res.json(results);
      }
    );
  });

  return router;
};
