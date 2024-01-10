const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, this is the booking bot!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
require('dotenv').config();
const twilio = require('twilio');
const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
app.post('/sms', (req, res) => {
    const incomingMessage = req.body.Body;
    const fromNumber = req.body.From;

    // Here you will handle the incoming message and respond
    // For now, let's just log the message
    console.log(`Message from ${fromNumber}: ${incomingMessage}`);

    // Send a simple reply (will be improved later)
    const twiml = new twilio.twiml.MessagingResponse();
    twiml.message('Thank you for your message. We will assist you shortly.');

    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
});
