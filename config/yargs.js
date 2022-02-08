const argv = require('yargs')
                
                .option('b' , {
                    alias:'base',
                    type:'number',
                    demandOption:true,
                    description: 'marca la base a multiplicar'
                })
                .option('l',{
                    alias:'listar',
                    type:'boolean',
                    demandOption:'true',
                    default:false,
                    description:'muestra la tabla en consola'

                })
                .option('h',{
                    alias:'hasta',
                    type:'number',
                    demandOption:true,
                    default:10,
                    description:'limite hasta donde se muestra la multiplicacion'
                })
                .check((argv, option)=> {
                    if(isNaN(argv.b)){
                        throw 'la base tiene que ser numerica';
                    }
                    return true
                })
                .argv


module.exports= argv