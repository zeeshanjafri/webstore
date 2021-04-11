var mysql = require("mysql2");
var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Sept82020!",
  database: "ecommerce",
  insecureAuth: true,
});

const query = "SELECT * FROM customers";

// open the MySQL connection
connection.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

// make to connection to the database.
connection.connect(function (err) {
  if (err) throw err;

  // if connection is successful
  connection.query(query, (err, result, fields) => {
    // if any error while executing above query, throw error
    if (err) throw err;

    // if there is no error, you have the result
    console.log(result);
  });
});

// connection.end();
module.exports = connection;
