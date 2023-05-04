const fs = require('fs');
const path = require('path');

const text = path.join(path.dirname(__filename), 'text.txt');

const stream = fs.createReadStream(text, 'utf-8');

stream.on('data', data => console.log(data));