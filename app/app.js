"use strict";

const express = require('express');
const app = express();

app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));

const home = require("./src/routes/home");
app.use("/", home);

module.exports = app;