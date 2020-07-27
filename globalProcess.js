const process = require("process");

console.log(process.pid);
console.log(process.versions.node);
console.log(process.argv);

// const [, , firstName, lastName] = process.argv;

// console.log(`Your name is ${firstName} ${lastName}`);

const grab = (flag) => {
  const indexAfterFlag = process.argv.indexOf(flag) + 1;
  return process.argv[indexAfterFlag];
};

const user = grab("--user");
const greeting = grab("--greeting");

console.log(`${greeting} ${user}`);
