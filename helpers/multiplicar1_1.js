const fs = require ('fs');

const crearArchivo = (base = 5)=>{

    console.log('=======================');
console.log('     Tabla del:', base);
console.log('=======================');

    let i = 1;
let salida = '';
// let numero = 5;
;

for (i ; i<=10; i++){
    let resultado = base*i
    salida += `${base} x  ${i}   =  ${resultado}\n`;
}
console.log(salida);

fs.writeFileSync(`tabla-${base}.txt`, salida);

console.log(`tabla - ${base}.txt  creado`);

}


module.exports = {
    crearArchivo
}