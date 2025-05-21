//CORE MODULES
const http = require('http');
const fs = require('fs');
const url = require('url');

//USER MODULES
const replaceHtml = require('./Modules/replaceHtml');

const html = fs.readFileSync('./Template/index.html', 'utf-8')
let products = JSON.parse(fs.readFileSync('./Data/products.json', 'utf-8'))
let productListHtml = fs.readFileSync('./Template/product-list.html', 'utf-8')
let productDetailHtml = fs.readFileSync('./Template/product-details.html', 'utf-8')

//STEP 1: CREATE A SERVER
const server = http.createServer();

server.on('request', (request, response) => {
    let {query, pathname: path} = url.parse(request.url, true)
    //console.log(x);
    //let path = request.url;

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
        if(!query.id) {
            let productHtmlArray = products.map((prod) => {
                return replaceHtml(productListHtml, prod)
            });
            response.writeHead(200, {'Content-Type' : 'text/html'});
            let productResponseHtml = html.replace('{{%CONTENT%}}', productHtmlArray.join(','))
            response.end(productResponseHtml)
        } else {
            let prod = products[query.id];
            let productDetailResponseHtml = replaceHtml(productDetailHtml, prod);
            response.end(html.replace('{{%CONTENT%}}', productDetailResponseHtml))
        }
    } else {
        response.writeHead(404, {
            'Content-Type' : 'text/html',
            'my-header': 'Hello, world'
        });
        response.end(html.replace('{{%CONTENT%}}', 'Error 404: Page not found!'));
    }
})

//SETEP 2: START THE SERVER
server.listen(8000, '0.0.0.0', () => {
    console.log('Server has started!');
})