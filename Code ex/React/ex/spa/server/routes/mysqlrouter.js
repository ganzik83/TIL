const express = require("express");
const mysql = require("mysql");
const dbconfig = require("./dbconfig");

const connection = mysql.createConnection(dbconfig);

module.exports = () => {
  const router = express.Router();

  router.get("/getuser", (req, res) => {
    console.log("database connected");
    connection.connect();

    connection.query("SELECT * FROM user", function(error, results, fields) {
      if (error) throw error;
      console.log("The solution is: ", results[0].solution);
      res.json(results);
      connection.end();
    });
  });

  router.post("/adduser", (req, res) => {
    console.log("database connected");
    connection.connect();
    const query = `INSERT INTO user (userid, password, salt, email) VALUES ("aa", "bb", "cc", "dd@dd")`;
    connection.query(query, function(error, results, fields) {
      if (error) throw error;
      console.log("The solution is: ", results[0].solution);
      res.json(results);
      connection.end();
    });
  });

  router.get("/test", (req, res) => {
    connection.connect();

    connection.query("SELECT 1 + 1 AS solution", function(
      error,
      results,
      fields
    ) {
      if (error) throw error;
      console.log("The solution is: ", results[0].solution);
      res.json(results);
      connection.end();
    });
  });

  return router;
};
