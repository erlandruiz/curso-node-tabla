const fs = require ('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false)=>{

        try {
        
        
            let i = 1;
        let salida = '';
        // let numero = 5;
        ;
        
        for (i ; i<=10; i++){
            let resultado = colors.blue(base*i);
            salida += `${colors.yellow(base)} ${colors.red('x')}  ${colors.green(i)}  ${'x'.red}  ${resultado}\n`;
        }

        if(listar){
            console.log('======================='.rainbow);
            console.log(colors.yellow('     Tabla del:'), colors.red(base));
            console.log('======================='.rainbow);
            console.log(salida);
            




        }


        
        
        fs.writeFileSync(`tabla-${base}.txt`, salida);

        return(`tabla - ${base}.txt`);
            
        } catch (err) {
            throw err;
        }

        

        

   


}


module.exports = {
    crearArchivo
}