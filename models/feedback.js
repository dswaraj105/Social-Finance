const { ObjectID } = require("bson");
const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  platform: {
    type: String,
  },
  featureRecomendation: {
    type: String,
  },
  removeFeature: {
    type: String,
  },
  message: {
    type: String,
  },
});

module.exports = mongoose.model("feedback", feedbackSchema);