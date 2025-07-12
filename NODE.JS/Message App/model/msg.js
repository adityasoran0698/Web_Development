const mongoose = require("mongoose");
const msgSchema = new mongoose.Schema({
  From: {
    type: String,
    required: true,
  },
  To: {
    type: String,
    required: true,
  },
  Message: {
    type: String,
    required: true,
  },
  MessageTrackTime: [{ timestamp: { type: Date } }],
  createdById: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  createdByEmail: {
    type: String,
    ref: "users",
  },
});

const MESSAGE = mongoose.model("msg", msgSchema);
module.exports = MESSAGE;
