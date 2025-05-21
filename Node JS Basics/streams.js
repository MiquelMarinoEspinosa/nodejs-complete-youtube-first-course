const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.listen(8000, '0.0.0.0', () => {
    console.log('Server has started!');
})

// server.on('request', (req, resp) => {
//     fs.readFile('./Files/large-file.txt', (err, data) => {
//         if (err) {
//             resp.end('Something went wrong!');
//             return;
//         }
//         resp.end(data)
//     });
// })

// server.on('request', (req, res) => {
//     let rs = fs.createReadStream('./Files/large-file.txt');

//     rs.on('data', (chunck) => {
//         res.write(chunck)
//     })

//     rs.on('end', () => {
//         res.end()
//     })

//     rs.on('error', (error) => {
//         res.end(error.message);
//     })
// })

server.on('request', (req, res) => {
    let rs = fs.createReadStream('./Files/large-file.txt');
    rs.pipe(res)
})