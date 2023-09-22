const { readFileSync, writeFileSync } = require("fs");
console.log("start");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");
//readFileSync accepts the file path, and the encode type.

writeFileSync(
  "./content/result-sync.txt",
  ` OMG! Here is the result: ${first}, ${second}`,
  { flag: "a" }
);
//writeFileSync, will take a file path and an argument to write to that file. It will create the file if it does not already exist. The third value is the options object. Setting the flaf to "a" will append. You can also have options for encoding and mode.

console.log("done with this task");
console.log("starting the next one");
