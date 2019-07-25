const express = require("express");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0918",
  database: "carhistory"
});

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
