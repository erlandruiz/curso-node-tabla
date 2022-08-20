console.clear();


const [,,arg3 = 'base=5']= process.argv;
const[,base =5] = arg3.split('=');
// console.log(arg3);

// console.log(base);




const {crearArchivo} = require ('./helpers/multiplicar1_4');
// const base  = 7;

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo,'creado' ))
    .catch(err => console.log(err));


