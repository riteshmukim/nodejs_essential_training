const fs = require("fs");

fs.renameSync("./assets/colorData.json", "./assets/colorsData.json");

fs.rename("./assets/notes.md", "./storage-files/notes.md", (err) => {
  if (err) {
    throw err;
  }
});

// setTimeout(() => {
//   fs.unlinkSync("./assets/aaa.jpg");
// }, 4000);
