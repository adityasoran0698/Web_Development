const MESSAGE = require("../model/msg.js");
const SendMessage = async (req, res) => {
  const body = req.body;
  const msg = await MESSAGE.create({
    From: body.From,
    To: body.To,
    Message: body.Message,
    createdById: req.user._id,
    createdByEmail: req.user.email,
    MessageTrackTime: [],
  });
  await MESSAGE.findOneAndUpdate(msg._id, {
    $push: {
      MessageTrackTime: {
        timestamp: new Date(),
      },
    },
  });
  return res.redirect("/allmsgs");
};

module.exports = {
  SendMessage,
};
