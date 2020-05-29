const mongoose = require("mongoose");
const Schema = require("Schema");
const BlogPostSchema = new Schema({
  title: "sample",
  body: "sample",
});
const BlogPost = mongoose.model("BlogPost", BlogPostSchema);
module.exports = BlogPost;
