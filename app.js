const { log } = require('console');
let fs = require('fs')

fs.readFile('./Files/start.txt', 'utf-8', (error1, data1) => {
    console.log(data1);
    fs.readFile(`./Files/${data1}.txt`, 'utf-8', (error2, data2) => {
        console.log(data2);
        fs.readFile('./Files/append.txt', 'utf-8', (error3, data3) => {
            console.log(data3);
            fs.writeFile('./Files/output.txt', `${data2}\n\n${data3}\n\nDate created ${new Date()}`, (error4, data4) => {
                console.log('File writthen successfuly')
            })
        })
    })
})

console.log('Reading file....');