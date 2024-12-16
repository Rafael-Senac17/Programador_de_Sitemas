var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.trim().split('\n');

var pares = lines.map(Number).filter((x) => x % 2 === 0)
console.log(`${pares.length} valores pares`)
