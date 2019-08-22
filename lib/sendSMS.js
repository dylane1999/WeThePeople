// -------------------------------------------------------------------------------------
// Twilio integration
// -------------------------------------------------------------------------------------
// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure

const accountSid = process.env["TWILIO_ACCOUNT_SID"];
const authToken = process.env["TWILIO_AUTH_TOKEN"];
const client = require("twilio")(accountSid, authToken);

function sendSMS(messages, index, numbers) {
const accountSid = process.env["TWILIO_ACCOUNT_SID"];
const authToken = process.env["TWILIO_AUTH_TOKEN"];
const client = require("twilio")(accountSid, authToken);
  // const messages = require("../lib/messages.json");
  // const app = require("../app");
  // let messages = app.get("messages");

  // let index = process.argv[2];
  // let numbers = process.argv[3].split(",");

  console.log(`sending SMS messages to ${JSON.stringify(numbers)}`)
  numbers.forEach(number => {
    send(number, messages[index]);
  });
}

/**
 * Twilio helper function
 *
 * @param to destination number
 * @param msg body of the message sent via Twilio
 */
function send(to, msg) {
  client.messages
    .create({
      body: msg,
      from: "+17472467393",
      to
    })
    .then(message => console.log(message.sid))
    .catch(message => console.log(message));
}

module.exports = sendSMS;
