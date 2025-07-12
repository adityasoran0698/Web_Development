const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  coverImageURL: {
    type: String,
    required: false,
    default: "/images/defaultblog.png",
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});
const Blog = mongoose.model("blog", blogSchema);
module.exports = Blog;
