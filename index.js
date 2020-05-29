const express = require("express");
const path = require("path");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = new express();
const bodyParser = require("body-parser");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(4000, () => {
  console.log("app is running on port 4000");
});
////app.get("/", (req, res) => {
////  res.sendFile(path.resolve(__dirname, "public/index.html"));
////  console.log(req);
////});
app.get("/", (req, res) => {
  res.render("index");
});
////app.get("/about", (req, res) => {
////  res.sendFile(path.resolve(__dirname, "public/about.html"));
////  console.log(req);
////});
app.get("/about", (req, res) => {
  res.render("about");
});
////app.get("/contact", (req, res) => {
////  res.sendFile(path.resolve(__dirname, "public/post.html"));
////  console.log(req);
////});
app.get("/contact", (req, res) => {
  res.render("contact");
});
////app.get("/post", (req, res) => {
////  res.sendFile(path.resolve(__dirname, "public/post.html"));
////  console.log(req);
////});
app.get("/post", (req, res) => {
  res.render("post");
});

app.get("/create", (req, res) => {
  res.render("create");
});

//!data base programme begins here
//?see here for mongoDB database

mongoose.connect("mongodb://localhost/my_database", {
  useNewUrlParser: true,
});

app.post("/posts/store", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});
