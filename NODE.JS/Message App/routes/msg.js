const express = require("express");
const router = express.Router();
const { SendMessage} = require("../controllers/msg.js");

router.post("/", SendMessage);

module.exports = router;
