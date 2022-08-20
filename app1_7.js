console.clear();



const {crearArchivo} = require ('./helpers/multiplicar1_4');
const base  = 7;

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo,'creado' ))
    .catch(err => console.log(err));


