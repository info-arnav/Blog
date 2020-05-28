const express = require("express");
const path = require("path");
const app = new express();
app.listen(4000, () => {
  console.log("app is running on port 4000");
});
