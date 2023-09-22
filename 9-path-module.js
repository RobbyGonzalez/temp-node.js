const path = require("path");

console.log(path.sep);

const filePath = path.join("./content", "subfolder", "test.txt");
console.log(filePath);
//join() normalizes the path for you... so I used a forward slash, when my separarte is a backwards slash, but it corrects it for me.

const base = path.basename(filePath);
console.log(base);
//basename() on a path, will return just the file name. dirname() will return the directory path.

const absolute = path.resolve("content", "subfolder", "test.txt");
console.log(absolute);
//resolve() used for absolute filepaths, it accepts the a sequence of paths or path segments and returns an absolute path. You can also, set up with __dirname as the first argument.
