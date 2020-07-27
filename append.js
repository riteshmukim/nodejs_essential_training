const fs = require("fs");
const colorsData = require("./assets/colorData.json");

colorsData.colorList.forEach((c) => {
  fs.appendFile(
    "./storage-files/colors.md",
    `${c.name}: ${c.hex} \n`,
    (err) => {
      if (err) {
        throw err;
      }
    }
  );
});
