console.log("File:", __filename);
console.log("Directory:", __dirname);

setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

global.message = "Hello from global!";
console.log(global.message);

const fs = require('fs'); 
console.log("Module info:", module);
