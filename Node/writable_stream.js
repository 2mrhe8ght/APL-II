const fs = require('fs');

const writableStream = fs.createWriteStream('output.txt');

writableStream.write('Hello, ');
writableStream.write('world!\n');

writableStream.end('End of the stream.');

writableStream.on('finish', () => {
  console.log('All data has been written.');
});
