var mysql = require("mysql");
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "3kx#26!9t69D",
  database: "opentutorials"
});
db.connect();
module.exports = db;
