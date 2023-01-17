Project Report

Introduction

This project is a simple Express.js server that uses the Twilio API and Multer to send and receive text messages and images. The project allows the user to send text messages to a specified phone number, receive text messages and log them to the console and send images to the server.

Requirements

Node.js
npm
Twilio account

Setup

Clone the repository and navigate to the project directory.
Run npm install to install the necessary packages.
Create a .env file in the root directory of the project with your Twilio accountSid and authToken.
Run the server using node index.js or nodemon if you have it installed.
Test the routes by sending a POST request to /send-text, /receive-text, and /send-image respectively.

Functionality

/send-text route listens for a POST request and sends a text message to a specified phone number using Twilio API.
/receive-text route listens for a POST request and logs the body of the incoming message to the console.
/send-image route listens for a POST request with an image file and uploads the image to the server.

Note

Make sure to replace the phone numbers in the code with the actual phone numbers you want to send/receive messages from.
The image upload feature is limited to image files with jpeg and png format and file size up to 5MB.
You can change the storage path of the uploaded images in the code.

Conclusion

This project demonstrates how to create a simple Express.js server that uses the Twilio API and Multer to send and receive text messages and images. It is a useful starting point for creating more complex projects that involve SMS and MMS functionality.