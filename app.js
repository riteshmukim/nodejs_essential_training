const counter = require("./myModule");

counter.inc();
counter.inc();

console.log(counter.getCount());

counter.dec();
console.log(counter.getCount());
