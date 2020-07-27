const fs = require("fs");

fs.readFile("./lib/collectAnswers.js", "UTF-8", (err, content) => {
  if (err) {
    console.log("An error has occured", err.message);
    process.exit();
  }
  console.log("File contents read");
  console.log(content);
});
