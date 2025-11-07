const fs = require("fs");
//Creating a file
fs.writeFile("file.txt", "Hello, World!", (err) => {
    if (err) throw err;
    console.log("File created");


    // Modification
    fs.appendFile("file.txt", "\nHi Ketan Patil..!", (err) => {
        if (err) throw err;
        console.log("File appended");


        //updated file
        fs.readFile("file.txt", "utf8", (err, data) => {
            if (err) throw err;
            console.log("File content:", data);
        });
    });
});