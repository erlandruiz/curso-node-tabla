const {crearArchivo} = require('./helpers/multiplicar5');
const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,


                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true,
                    default: false,


                })
                .check((argv, options)=>{
                    if( isNaN(argv.b)){
                        throw 'La base  tiene que ser un número '
                    }
                    return true;

                })

                .argv;

console.clear();


// console.log(process.argv);
console.log(argv);

            
// console.log(base);


// const base = 11;

crearArchivo(argv.b , argv.l)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch( err => console.log(err));