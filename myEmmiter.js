const user = require('./Modules/user');

let myEmmitter = new user();

myEmmitter.on('userCreated', (id, name) => {
    console.log(`A new user ${name} with ${id} is created!`)
})

myEmmitter.on('userCreated', (id, name) => {
    console.log(`A new user ${name} with ${id} added to database!`)
})

myEmmitter.emit('userCreated', 101, 'John');