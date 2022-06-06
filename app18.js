const {crearArchivo} = require('./helpers/multiplicar5');
const argv = require('./config/yargs');

console.clear();


// console.log(process.argv);
// console.log(argv);

            
// console.log(base);


// const base = 11;

crearArchivo(argv.b , argv.l)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch( err => console.log(err));