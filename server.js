const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

var mysql = require("mysql2");
// Connect to MySQL Database (already running) -> Use 'net start MySQL80' to start the server
var connection = mysql.createPool({
  connectionLimit: 10,
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "ecommerce",
  insecureAuth: true,
});

const app = express();

// Avoid Cross Origin Request errors
var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route to test connection
app.get("/", (req, res) => {
  res.json({ message: "Welcome to webstore application." });
});

app.get("/customers", async (req, res) => {
  // Connecting to the database.
  connection.getConnection(function (err, connection) {
    // Release connection if there is an error
    if (err) {
      connection.release();
      return res.send(400, "Couldn't get a connection");
    }
    // Executing the MySQL query (select all data from the 'customers' table).
    connection.query(
      "SELECT * FROM customers",
      function (error, results, fields) {
        // If some error occurs, we throw an error.
        if (error) throw error;

        // Getting the 'response' from the database and sending it to our route. This is were the data is.
        res.send(results);
      }
    );
    connection.release();
  });
});

app.get("/product/:id", async (req, res) => {
  const { id } = req.params;
  connection.getConnection(function (err, connection) {
    // Release connection if there is an error
    if (err) {
      connection.release();
      return res.send(400, "Couldn't get a connection");
    }

    connection.query(
      `SELECT * FROM products WHERE productID = ${id}`,
      function (error, results, fields) {
        // If some error occurs, we throw an error.
        if (error) throw error;

        // Getting the 'response' from the database and sending it to our route. This is were the data is.
        res.send(results);
      }
    );
    connection.release();
  });
});

app.get("/products", async (req, res) => {
  // Connecting to the database.
  connection.getConnection(function (err, connection) {
    // Release connection if there is an error
    if (err) {
      connection.release();
      return res.send(400, "Couldn't get a connection");
    }
    // Executing the MySQL query (select all data from the 'customers' table).
    connection.query(
      "SELECT * FROM products",
      function (error, results, fields) {
        // If some error occurs, we throw an error.
        if (error) throw error;

        // Getting the 'response' from the database and sending it to our route. This is were the data is.
        res.send(results);
      }
    );
    connection.release();
  });
});

app.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  connection.getConnection(function (err, connection) {
    // Release connection if there is an error
    if (err) {
      connection.release();
      return res.send(400, "Couldn't get a connection");
    }
    connection.query(
      "SELECT * FROM customers WHERE customerID = ?",
      id,
      function (error, results, fields) {
        // If some error occurs, we throw an error.
        if (error) throw error;

        // Getting the 'response' from the database and sending it to our route. This is were the data is.
        res.send(results);
      }
    );
    connection.release();
  });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
