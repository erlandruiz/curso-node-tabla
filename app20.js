const {crearArchivo} = require('./helpers/multiplicar6');
const argv = require('./config/yargs');
require('colors');

console.clear();


// console.log(process.argv);
// console.log(argv);

            
// console.log(base);


// const base = 11;

crearArchivo(argv.b , argv.l , argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch( err => console.log(err));