const { createTable } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

console.clear()

createTable( argv.base, argv.list, argv.limit )
    .then( fileName => console.log(fileName, "creada") )
    .catch( err => console.log(err) )





