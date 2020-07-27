const collectAnswers = require("./lib/collectAnswers");

const questions = [
  "What is your name? ",
  "Where dou you live? ",
  "What are you going to do today? ",
];

const answerEvent = collectAnswers(questions);

answerEvent.on("answer", (answer) => {
  console.log(`question answeres: ${answer}`);
});

answerEvent.on("complete", (answers) => {
  console.log(`Thankyou for your answers`);
  console.log(answers);
});

answerEvent.on("complete", () => process.exit());
