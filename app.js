const http = require('http');
const fs = require('fs')

const html = fs.readFileSync('./Template/index.html', 'utf-8');

//STEP 1: CREATE A SERVER
const server = http.createServer((request, response) => {
    response.end(html)
    console.log('A new request received');
    //console.log(response);
});

//SETEP 2: START THE SERVER
server.listen(8000, '0.0.0.0', () => {
    console.log('Server has started!');
})