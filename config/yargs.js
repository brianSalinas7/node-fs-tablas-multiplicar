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
                    default:10
                })
                .check((argv, option)=> {
                    if(isNaN(argv.b)){
                        throw 'la base tiene que ser numerica';
                    }
                    return true
                })
                .argv


module.exports= argv