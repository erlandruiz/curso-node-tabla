

console.clear();
const {crearArchivo} = require ('./helpers/multiplicar1_4');

const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,

                })

                .check((argv, options)=>{
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un numero'
                    }
                    return true;
                })
                
    

                .argv;


// console.log(process.argv);
console.log(argv);

// console.log('base: yars', argv.b);

crearArchivo(argv.b)
            .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
            .catch(err => console.log(err));