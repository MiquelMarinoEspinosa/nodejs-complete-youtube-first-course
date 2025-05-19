const http = require('http');
const fs = require('fs')

const html = fs.readFileSync('./Template/index.html', 'utf-8');

//STEP 1: CREATE A SERVER
const server = http.createServer((request, response) => {
    let path = request.url;

    if (path === '/' || path.toLocaleLowerCase() === '/home') {
        response.end('You are in home page');
    } else if (path.toLocaleLowerCase() === '/about') {
        response.end('You are in about page');
    } else if (path.toLocaleLowerCase() === '/contact') {
        response.end('You are in contact page');
    } else {
        response.end('Error 404: Page not found!');
    }
});

//SETEP 2: START THE SERVER
server.listen(8000, '0.0.0.0', () => {
    console.log('Server has started!');
})