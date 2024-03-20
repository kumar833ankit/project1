const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
  whatHappened: String,
  howDoYouFeel: String,
  isHappy: Boolean,
  isUpset: Boolean,
  isReady: Boolean,
  emailAndSignature: String,
  serialNumber: String,
  howToHelp: String,
  howToImprove: String
});

const FormData = mongoose.model('inputdatas', formDataSchema); // 'inputdata' is the collection name

module.exports = FormData;
