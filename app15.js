const {crearArchivo} = require('./helpers/multiplicar4');
const argv = require('yargs').argv;

console.clear();


console.log(process.argv);
console.log(argv);

console.log('base:yargs', argv.base);

// console.log(base);


// const base = 11;

// crearArchivo(base)
//     .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
//     .catch( err => console.log(err));