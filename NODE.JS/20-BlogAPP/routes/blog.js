const express = require("express");
const router = express.Router();
const Blog = require("../models/blog.js");
const Comment = require("../models/comments.js");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.resolve(
      `./public/uploads/${req.user.fullname}-${req.user._id}`
    );
    fs.mkdir(uploadPath, { recursive: true }, () => {
      cb(null, uploadPath);
    });
  },
  filename: function (req, file, cb) {
    const filename = `${Date.now()}-${file.originalname}`;
    cb(null, filename);
  },
});
const upload = multer({ storage: storage });
router.get("/add-new", (req, res) => {
  return res.render("addblog", {
    user: req.user,
  });
});

router.post("/addblogs", upload.single("coverImageURL"), async (req, res) => {
  const body = req.body;
  const file = req.file;

  const blogData = await Blog.create({
    title: body.title,
    body: body.body,
    createdBy: req.user._id,
  });
  if (file) {
    blogData.coverImageURL = `/uploads/${req.user.fullname}-${req.user._id}/${file.filename}`;
  }

  await Blog.create(blogData);
  return res.redirect("/");
});
router.get("/myblogs", async (req, res) => {
  const myallblog = await Blog.find({ createdBy: req.user._id });
  return res.render("myblogs", {
    user: req.user,
    myblogs: myallblog,
  });
});
router.post("/dlt/:id", async (req, res) => {
  const blog = await Blog.findByIdAndDelete(req.params.id);
  return res.redirect("/blog/myblogs");
});

router.get("/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id).populate("createdBy");
  const comments = await Comment.find({ blogId: req.params.id }).populate(
    "createdBy"
  );
  res.render("blog", {
    blog,
    user: req.user,
    comments,
  });
});
router.post("/comment/:blogId", async (req, res) => {
  const body = req.body;
  await Comment.create({
    content: body.content,
    blogId: req.params.blogId,
    createdBy: req.user._id,
  });
  return res.redirect(`/blog/${req.params.blogId}`);
});

router.get(`/update/:id`, async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  return res.render("addblog", {
    user: req.user,
    editblog: blog,
  });
});
router.post(`/update/:id`, async (req, res) => {
  const body = req.body;
  const blog = await Blog.findByIdAndUpdate(req.params.id, {
    title: body.title,
    body: body.body,
  });
  return res.redirect("/");
});

module.exports = router;
