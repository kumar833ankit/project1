const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const FormData = require('./models/formData');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// MongoDB URI
const MONGODB_URI= "mongodb+srv://kumar6290ankit:qwerty123@cluster0.zynsl9z.mongodb.net/yolowolo?retryWrites=true&w=majority";

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

// Route to serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Route to handle form submission
app.post('/submit', (req, res) => {
  const formData = new FormData({
    whatHappened: req.body.whatHappened,
    howDoYouFeel: req.body.howDoYouFeel,
    isHappy: req.body.isHappy === 'on',
    isUpset: req.body.isUpset === 'on',
    isReady: req.body.isReady === 'on',
    emailAndSignature: req.body.emailAndSignature,
    serialNumber: req.body.serialNumber,
    howToHelp: req.body.howToHelp,
    howToImprove: req.body.howToImprove
  });

  formData.save()
    .then(() => res.send('Form data saved successfully'))
    .catch((err) => res.status(500).send(`Error saving form data: ${err}`));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
