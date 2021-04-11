const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connection = require("./helpers/connection");
const query = require("./helpers/query");

const app = express();
const dbConfig = require("./App/df.config");

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to webstore application." });
});

app.get("/customers", async (req, res) => {
  const conn = await connection(dbConfig).catch((e) => {});
  const results = await query(conn, "SELECT * FROM customers").catch(
    console.log
  );
  res.json({ results });
});

app.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  const conn = await connection(dbConfig).catch((e) => {});
  const results = await query(conn, "SELECT * FROM customers WHERE id = ?", [
    id,
  ]);
  res.send(tweet);
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
