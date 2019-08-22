const messages = require("../lib/messages.json");
const fs = require('fs')

function saveNumber(number){
  //messages.numbers.push(`+1${number}`)

  // write to file
console.log("helllloooo")
fs.appendFile('messages.numbners.json', `+1${number}`, function (err) {
  if (err) throw err;
  console.log('Updated!');
});
}


module.exports = saveNumber
