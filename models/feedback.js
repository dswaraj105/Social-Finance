const { ObjectID } = require("bson");
const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  platform: {
    type: String,
  },
  bestFeature: {
    type: String,
  },
  featureRecomendation: {
    type: String,
  },
  badFeature: {
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