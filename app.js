//npm - global command, comes with node
//npm --version

//local dependency - use it only in this particular project
//npm i <packageName>

//global dependecy - use it in any project
//npm install -g <packageName>
//sudo npm install -g <packageName> (mac)

//package.json - manifest file (stores important info about project.packages)
//manual approach (create package.json in the root, create properties, etc...)
//npm init (step by step, press enter to skip)
//npm init -y (everything default)

const _ = require("lodash");
//convention for naming lowdash is an "_"

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);

//showcases using a function from the lodash library.
