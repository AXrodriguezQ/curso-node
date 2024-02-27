const fs = require('node:fs');

const stats = fs.statSync('./archivo.txt')

const txt = fs.readFileSync('./archivo.txt', 'utf-8')

console.log(
    stats.isFile(), // fichehero
    stats.isDirectory(), // directorio
    stats.isSymbolicLink(), // enlace simbolico
    stats.size // tamaño en bytes
);

console.log(txt);