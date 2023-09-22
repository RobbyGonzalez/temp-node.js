//CommonJS, every file is a module (by default)
//Modules -Encapsulated Code (only share minimum)
const names = require("./4-names.js");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor.js");
require("./7-mind-grenade"); //a module can be directly envoked, and you don't have to store in a const in this case.

const { john, peter } = names;

sayHi(`Robby`);
sayHi(john);
sayHi(peter);
