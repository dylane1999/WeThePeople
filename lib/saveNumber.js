function saveNumber(number, app) {
  messages = app.get("messages");
  messages.numbers.push(`+1${number}`);
  app.set("messages", messages);
}

module.exports = saveNumber;













/*
function saveNumber_v1(number, app) {
  if (app.get("env") === "development") {
    const messages = require("./messages.json");
    const fs = require("fs");
    const path = require("path");

    messages.numbers.push(`+1${number}`);
    // prettier-ignore
    fs.writeFileSync(path.join(__dirname, "messages.json"), JSON.stringify(messages, null, 2), function(err) {
      if (err) throw err;
      console.log("Saved!");
    });
  } else {
    messages = app.get("messages");
    messages.numbers.push(`+1${number}`);
    app.set("messages", messages);
  }
}
*/