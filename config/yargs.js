const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'list',
        type: 'boolean',
        describe: 'Muestra la tabla en la consola'
    })
    .option('h', {
        alias: 'limit',
        type: 'number',
        default: 10,
        demandOption: false,
        describe: 'Limite de la multiplicación'
    })
    .check( (argv, options) => {
        if ( isNaN( argv.b ) ) {
            throw 'La base debe ser un número'
        }
        if ( ( argv.l ) && ( typeof argv.l !== 'boolean' ) ) {
            throw `La opción list debe ser un valor booleano, pero recibio un ${ typeof argv.l }`
        }
        if ( isNaN( argv.h ) ) {
            throw 'El limite debe ser un número'
        }
        return true
    })
    .argv

module.exports = argv