
const {crearArchivo} = require('./helpers/multiplicar4');

console.clear();


const base = 11;

crearArchivo(base)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch( err => console.log(err));
