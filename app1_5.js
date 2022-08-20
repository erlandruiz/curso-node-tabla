console.clear();



const {crearArchivo} = require ('./helpers/multiplicar1_2');
const base  = 3;

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo,'creado' ))
    .catch(err => console.log(err));


