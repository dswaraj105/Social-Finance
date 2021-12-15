const { remove } = require("../models/feedback");
const Feedback = require("../models/feedback");

exports.recordFeedback =async (req, res, next) => {
  const platform = req.body.platform;
  const featureRecomendation = req.body.featureRecomendation;
  const removeFeature = req.body.removeFeature;
  const message = req.body.message;
  
  // console.log("feedback recod");
  // console.log(platform);
  // console.log(featureRecomendation);
  // console.log(removeFeature);
  // console.log(message);
  // console.log("==================");
  const data = {
    platform,
    featureRecomendation,
    removeFeature,
    message
  }

  const feedback = new Feedback(data);

  try{
    await feedback.save();
    res.status(201).send({msg: "Recorded"});

  }catch(err){
    console.log(err);
    res.status(500).send({msg: "failed", err: err})
  }

};