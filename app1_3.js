console.clear();

const fs = require ('fs');
const base  = 3;
console.log('=======================');
console.log(`      Tabla del ${base}`);
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

fs.writeFile(`tabla-${base}.txt`, salida, (err)=>{
    if (err) throw err;

    console.log(`table-${base}.txt creado`);
})