var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "3kx#26!9t69D",
  database: "opentutorials"
});

connection.connect();

connection.query("SELECT * FROM topic", function(error, results, fields) {
  if (error) {
    console.log(error);
  }
  console.log(results);
});

connection.end();
