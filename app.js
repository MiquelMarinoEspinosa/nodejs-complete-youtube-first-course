let fs = require('fs')

//Reading file asynchronously
fs.readFile('./Files/input.txt', 'utf-8', (err, data) => {
    console.log(data);
});
console.log('Reading file....');