const fs = require('fs')
const colors = require('colors');
const crearArchivo = async (base = 5, listar=false, hasta=10) => {

  
    let salida = ''
    let consola = ''
    for(let i = 1 ; i <=hasta ; i ++){
        salida += `${base} X ${ i } = ${ base * i} \n`;
        consola += `   ${colors.blue(base)} ${'X'.yellow} ${ colors.blue(i) } = ${ colors.yellow( base * i)} \n`;

    }
    if(!!listar){
        console.log('=================='.rainbow)
        console.log(`   Tabla del: ${base}  `.yellow)
        console.log('==================='.rainbow)
    
        console.log(consola)
    }

    await fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
    
    return `la tabla del ${base} fue creada`
}

module.exports = {
    crearArchivo
}