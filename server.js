const express = require('express');
const twilio = require('twilio');
const multer = require('multer');
const app = express();

require('dotenv').config()
const accountSid = process.env.TWILIO_ACCOUNT_SID; 
const authToken = process.env.TWILIO_AUTH_TOKEN; 
const client = require('twilio')(accountSid, authToken);

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage, 
    limits: {
    fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

// Sending text messages route
app.post('/send-text', (req, res) => {
    const client = twilio(YOUR_ACCOUNT_SID, YOUR_AUTH_TOKEN);

    client.messages.create({
        to: '+1234567890',
        from: '+0987654321',
        body: 'Hello, this is a test message!'
    }).then(() => {
        res.send('Text message sent successfully!');
    }).catch(err => {
        res.send(err);
    });
});

// Receiving text messages route
app.post('/receive-text', (req, res) => {
    const message = req.body.Body;
    console.log(`Received message: ${message}`);
    res.send('Text message received!');
});

// Sending image route
app.post('/send-image', upload.single('image'), (req, res, next) => {
    const image = req.file;
    console.log(`Sent image: ${image.path}`);
    res.send('Image sent successfully!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
