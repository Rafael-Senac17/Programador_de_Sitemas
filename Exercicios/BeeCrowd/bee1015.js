var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var x = (lines[0].split(' '))
var y = (lines[1].split(' '))

let x1 = Number(x[0])
let x2 = Number(y[0])
let y1 = Number(x[1])
let y2 = Number(y[1])

let dist = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)



console.log(dist.toFixed(4))