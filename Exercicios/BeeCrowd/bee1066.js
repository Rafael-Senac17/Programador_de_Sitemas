var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var par = lines.map(Number).filter((x) => x % 2 === 0)
var impar = lines.map(Number).filter((x) => x % 2 != 0)
var positivo = lines.map(Number).filter((x) => x > 0)
var negativo = lines.map(Number).filter((x) => x < 0)
console.log(`${par.length} valor(es) par(es)\n${impar.length} valor(es) impar(es)\n${positivo.length} valor(es) pasitivo(s)\n${negativo.length} valor(es) negativo(s)`)