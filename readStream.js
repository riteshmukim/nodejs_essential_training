const fs = require("fs");

const readStream = fs.createReadStream(
  "./storage-files/lorum-ipsum.md",
  "UTF-8"
);

let fileContent = "";

console.log("type something ...");

readStream.on("data", (data) => {
  console.log(`I read ${data.length - 1} chars of text`);
  fileContent += data;
});

readStream.once("data", (data) => {
  console.log(data);
});

readStream.once("end", () => {
  console.log("Finished Reading");
  console.log(`In total I read ${fileContent.length - 1} chars of text`);
});
