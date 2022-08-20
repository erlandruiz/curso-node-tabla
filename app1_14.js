

console.clear();
const {crearArchivo} = require ('./helpers/multiplicar1_7');
const argv = require('./config/yars1_2');
require ('colors');





// console.log(process.argv);
// console.log(argv);

// console.log('base: yars', argv.b);

crearArchivo(argv.b, argv.l, argv.h)
            .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
            .catch(err => console.log(err));