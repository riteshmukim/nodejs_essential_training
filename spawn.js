const cp = require("child_process");

const questionApp = cp.spawn("node", ["question.js"]);

questionApp.stdin.write("Ritesh \n");
questionApp.stdin.write("Howrah \n");
questionApp.stdin.write("Enjoy \n");

questionApp.stdout.on("data", (data) => {
  console.log(`From the question app: ${data}`);
});

questionApp.on("close", () => {
  console.log(`Question process ended`);
});
