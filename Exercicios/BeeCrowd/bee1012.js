var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split(' ');


let a = Number(lines[0])
let b = Number(lines[1])
let c = Number(lines[2])

let tri = a * c / 2
let cir = (c ** 2) * 3.14159
let trap = a + b * c / 2
let quad = b ** 2
let retan = a * b

console.log(`TRIANGULO: ${tri.toFixed(3)}\nCIRCULO: ${cir.toFixed(3)}\nTRAPEZIO: ${trap.toFixed(3)}\nQUADRADO: ${quad.toFixed(3)}\nRETANGULO: ${retan.toFixed(3)}`)