const express = require('express');

const contactusController = require('../controllers/contactUs') ;
const feedbackController = require("../controllers/feedback");

const router = express.Router();

router.post('/contactus', contactusController.contactUs);

router.post('/feedback', feedbackController.recordFeedback);

module.exports = router;