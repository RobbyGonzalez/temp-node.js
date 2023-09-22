//local
const secret = `SUPER SECRET`;
//shared
const john = `john`;
const peter = `peter`;

console.log(module);
//module is the global variable that contain many properties including the object "exports." Only modules, withing in the object can be shared.

module.exports = { john, peter }; //this allows us to share to other modules
