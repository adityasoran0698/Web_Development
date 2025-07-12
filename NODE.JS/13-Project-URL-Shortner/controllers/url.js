const shortid = require("shortid");
const URL = require("../models/url.js");
const CreateNewURLShortID = async (req, res) => {
  const shortId = shortid();
  const body = req.body;

  const result = await URL.create({
    shortId: shortId,
    redirectURL: body.url,
    visitHistory: [],
  });
  res.status(201).json({ id: shortId });
};
const GetAllURLsData = async (req, res) => {
  const result = await URL.find({});
  res.status(200).json(result);
};

const RedirectToOriginalURL = async (req, res) => {
  const body = req.body;
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: Date.now(),
      },
    }
  );
  res.redirect(entry.redirectURL);
};

const TotalClicks = async (req, res) => {
  const shortId = req.params.shortId;
  const result = await URL.findOne({
    shortId,
  });
  return res.json({
    Clicks: result.visitHistory.length,
    Analytics: result.visitHistory,
  });
};
module.exports = {
  CreateNewURLShortID,
  GetAllURLsData,
  RedirectToOriginalURL,
  TotalClicks,
};
