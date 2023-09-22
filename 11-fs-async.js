const { readFile, writeFile } = require("fs");
//these are the async versions (or UI non-blocking)... and you MUST supply a callback.
//the call back runs when the function is done and gets two parameters.
//error and result are the parameters, be sure to always handle the error first so program does not close.
//if you don't supply the second encoding argrument you get a buffer with what looks like hex coding.

console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  } else {
    const first = result;
    readFile("./content/second.txt", "utf8", (err, result) => {
      if (err) {
        console.log(err);
        return;
      } else {
        const second = result;
        writeFile(
          "./content/result-async.txt",
          `Here is the result: ${first}, ${second}`,
          (err, result) => {
            if (err) {
              console.log(err);
              return;
            } else {
              console.log("done with this task");
            }
          }
        );
      }
    });
  }
});
console.log("starting next one");
