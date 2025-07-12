const express = require("express");
const router = express.Router();
const {
  CreateNewURLShortID,
  GetAllURLsData,
  RedirectToOriginalURL,
  TotalClicks,
} = require("../controllers/url.js");
router.post("/", CreateNewURLShortID);
router.get("/", GetAllURLsData);
router.get("/:shortId", RedirectToOriginalURL);
router.get("/analytics/:shortId", TotalClicks);
module.exports = router;
