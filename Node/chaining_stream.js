
const fs = require('fs');
const zlib = require('zlib');

const readableStream = fs.createReadStream('input.txt');

const writableStream = fs.createWriteStream('input.txt.gz');

const gzip = zlib.createGzip();

readableStream.pipe(gzip).pipe(writableStream);

console.log('File compressed successfully!');
