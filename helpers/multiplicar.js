const fs = require('fs')
const colors = require('colors')

// return new Promise
// const createTable = ( base = 1 ) => {
//     return new Promise(( resolve, reject ) => {
//         console.log("====================")
//         console.log("    Tabla del: ", base)
//         console.log("====================")
    
//         let template = ''
    
//         for ( let i = 1; i <= 10; i++ ) {
//             template += `${ base } x ${ i } = ${ base * i } \n`
//         }

//         const fileName = `tabla-${base}.txt` 
//         const path = `${ fileName }`
//         try {
//             fs.writeFileSync( path, template )
//             resolve( fileName )
//         } catch ( err ) {
//             console.clear()
//             if ( err.code === 'EPERM' ) {
//                 reject('EPERM: operation not permitted')
//             }
//             reject('An error ocurred')
//         }
//     })
// }

const createTable = async ( base = 1, list = false, limit = 10 ) => {
    console.clear()
    let template = ''
    let consola = ''
    
    for ( let i = 1; i <= limit; i++ ) {
        template += `${ base } x ${ i } = ${ base * i } \n`
        consola += `${ base } ${ colors.green('x') } ${ i } = ${ colors.blue( base * i ) } \n`
    }

    const fileName = `tabla-${base}.txt` 
    const path = `salida/${ fileName }`
    try {
        fs.writeFileSync( path, template )
        if ( list ) {
            console.log("====================".cyan)
            console.log("    Tabla del: ", colors.green(base))
            console.log("====================".cyan)
            console.log(consola)
        }
        return fileName
    } catch ( err ) {
        console.clear()
        if ( err.code === 'EPERM' ) {
            throw 'EPERM: operation not permitted'
        }
        throw 'An error ocurred'
    }
}
module.exports = {
    createTable
} 
    