const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.connect(port, function)
app.get(input, (req, res) => {res.render("index")})
