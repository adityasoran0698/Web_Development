const mongoose = require("mongoose");
async function connectMongodb(url) {
  // connection to mongodb
  return mongoose
    .connect(url)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("Error: ", err));
}
module.exports = {
  connectMongodb,
};
