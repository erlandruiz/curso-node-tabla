const {crearArchivo} = require('./helpers/multiplicar5');
const argv = require('./config/yargs');
require('colors');

console.clear();


// console.log(process.argv);
// console.log(argv);

            
// console.log(base);


// const base = 11;

crearArchivo(argv.b , argv.l)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch( err => console.log(err));