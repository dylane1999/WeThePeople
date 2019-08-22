var express = require("express");
var router = express.Router();
// const articles = require('../database')
// const saveNumber = require('../lib/saveNumber')
const sendSMS = require("../lib/sendSMS")

/* GET home page. */
router.get("/", function(req, res, next) {
  console.log(req.app.get("messages").numbers);
  res.render("index", { title: "We The People" });
});

router.post("/", function(req, res) {
  let number = req.body.number;

  if (/\d{9}/.test(number)) {
    numbers = req.app.get("numbers");
    numbers.push(`+1${number}`);
    console.log(numbers)
    req.app.set("numbers", numbers);

    res.redirect("/");
  } else {
    res.send(`the number you entereed [${number}] isn't valid`);
  }
});

router.get("/search", function(req, res, next) {
  res.render("search");
});


router.get('/send-sms', function(req, res){
  // const path = require('path')
  // const { spawn } = require('child_process');

  let index = req.app.get("index")
  let messages = req.app.get("messages")
  let numbers = req.app.get("numbers")

  sendSMS(messages, index, numbers)
  
  // let cmd = `${path.join(__dirname, "..", "bin", "send_sms")}`// ${index} "${numbers}"`

  // send messages
  // const child = spawn(cmd, [index, `"${numbers}"`]);

  // child.on('error', function() {
  //   console.log(arguments)
  //   console.log("an error occurred with send_sms")
  // })

  // child.on('exit', function (code, signal) {
  //   if(code) {
  //     console.log("an error occurred with Twilio send_sms")
  //   }

  //   console.log("sms sent successfully")
  // });

  // reset since we only have 10 messages
  if (index >= messages.length) {
    index = 0;
  } else {
    index = index + 1
  }
  
  req.app.set("index", index)

  res.send("SMS messages sent!")
})


module.exports = router;
