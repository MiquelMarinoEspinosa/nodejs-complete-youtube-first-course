const http = require('http');

//STEP 1: CREATE A SERVER
const server = http.createServer((request, response) => {
    response.end('Hello from the server!')
    console.log('A new request received');
    //console.log(response);
});

//SETEP 2: START THE SERVER
server.listen(8000, '0.0.0.0', () => {
    console.log('Server has started!');
})