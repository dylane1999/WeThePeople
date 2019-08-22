const messages = require("../lib/messages.json");
const fs = require('fs')

function saveNumber(number){
  newFile = messages.numbers.push(`+1${number}`)

  // write to file
console.log(newFile)
console.log("test")
console.log(number)



fs.writeFileSync('messages.numbers.json', newFile, function (err) {
  if (err) throw err;
  console.log('Saved!');
  console.log("hellodosnff")
})

//fs.appendFileSync('messages.numbers.json', `+1${number}`, function (err) {
  //if (err) throw err;
  //console.log('Updated!');
//});
}


module.exports = saveNumber
