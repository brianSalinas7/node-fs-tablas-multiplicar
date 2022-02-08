const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs')

 

console.clear()
const {b,l,h} = argv

crearArchivo(b, l, h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))

