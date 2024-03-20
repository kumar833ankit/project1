const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
  whatHappened: String,
  emotions: String,
  isHappy: Boolean,
  isUpset: Boolean,
  isReady: Boolean,
  emailAndSignature: String,
  serialNumber: String,
  howToHelp: String,
  howToImprove: String
});

const FormData = mongoose.model('inputdata', formDataSchema); // 'inputdata' is the collection name

module.exports = FormData;
