const fs = require ('fs');
const colors = require('colors');
const crearArchivo = async (base = 5, listar = false, hasta = 10)=>{

        try {       
            let i = 1;
        let salida = '';
        let consola = '';
        
        // let numero = 5;
        ;
        
        for (i ; i<= hasta ; i++){
            let resultado = (base*i);
            salida += `${(base)} ${('x')}  ${(i)}  ${'x'}  ${resultado}\n`;
            consola += `${colors.yellow(base)} ${colors.red('x')}  ${colors.green(i)}  ${'x'.red}  ${resultado}\n`;
        }

        if(listar){
            console.log('======================='.rainbow);
            console.log(colors.yellow('     Tabla del:'), colors.red(base));
            console.log('======================='.rainbow);
            console.log(consola);        
        }
       
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return(`tabla - ${base}.txt`);
            
        } catch (err) {
            throw err;
        }

}

module.exports = {
    crearArchivo
}