const fs = require("fs");

fs.writeFileSync("file.txt", "Hello, World!");
console.log("File created");

fs.appendFileSync("file.txt", "\nHi Ketan Patil..!");
console.log("File appended");

const data = fs.readFileSync("file.txt", "utf8");
console.log("File content:\n" + data);