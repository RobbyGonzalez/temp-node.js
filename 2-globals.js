//GLOBALS -NO WINDOW OBJ !!!!

//__dirname - path to current directory
//__filename - file name
//require - function to use modules (CommonJS)
//module - info about current module (file)
//process - info about environment where the program is being executed

console.log(process); //seems to be a giant object that show all available keywords in node.js

setInterval(() => {
  //runs a function continually based on an interval time.
  console.log(`Hello world!`);
}, 1000);
