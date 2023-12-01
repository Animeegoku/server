const express = require("express");

const cors = require("cors");
const path = require("path");
const morgan = require("morgan");

const app = express();
const api = require("./routes/api");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: "http://localhost:9000",
  })
);
app.use(morgan("combined"));
app.use("/v1", api);

module.exports = app;
