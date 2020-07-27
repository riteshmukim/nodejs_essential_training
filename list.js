const fs = require("fs");

fs.readdir("./lib", (err, files) => {
  if (err) {
    throw err;
  }
  console.log("Completed");
  console.log(files);
});

console.log("Strated Reading Files");
