const http = require('http');
const fs = require('fs')

const html = fs.readFileSync('./Template/index.html', 'utf-8')
let products = JSON.parse(fs.readFileSync('./Data/products.json', 'utf-8'))

//STEP 1: CREATE A SERVER
const server = http.createServer((request, response) => {
    let path = request.url;

    if (path === '/' || path.toLocaleLowerCase() === '/home') {
        response.writeHead(200, {
            'Content-Type' : 'text/html',
            'my-header': 'Hello, world'
        });
        response.end(html.replace('{{%CONTENT%}}', 'You are in Home page'));
    } else if (path.toLocaleLowerCase() === '/about') {
        response.writeHead(200, {
            'Content-Type' : 'text/html',
            'my-header': 'Hello, world'
        });
        response.end(html.replace('{{%CONTENT%}}', 'You are in About page'));
    } else if (path.toLocaleLowerCase() === '/contact') {
        response.writeHead(200, {
            'Content-Type' : 'text/html',
            'my-header': 'Hello, world'
        });
        response.end(html.replace('{{%CONTENT%}}', 'You are in Contact page'));
    } else if (path.toLocaleLowerCase() === '/products') {
        //response.writeHead(200, {'Content-Type' : 'application/json'});
        response.end('You are in products page')
        console.log(products);
    } else {
        response.writeHead(404, {
            'Content-Type' : 'text/html',
            'my-header': 'Hello, world'
        });
        response.end(html.replace('{{%CONTENT%}}', 'Error 404: Page not found!'));
    }
});

//SETEP 2: START THE SERVER
server.listen(8000, '0.0.0.0', () => {
    console.log('Server has started!');
})