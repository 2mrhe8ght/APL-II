const fs = require('fs');
const path = require('path');

console.log('File:', __filename);
console.log('Directory:', __dirname);

const demoFolder = path.join(__dirname, 'demo-folder');
if (!fs.existsSync(demoFolder)) {
	fs.mkdirSync(demoFolder);
	console.log('\nCreated folder:', demoFolder);
} else {
	console.log('\nFolder already exists:', demoFolder);
}

const files = fs.readdirSync(__dirname);
console.log('\nFiles in this directory:');
files.forEach(f => console.log('-', f));

