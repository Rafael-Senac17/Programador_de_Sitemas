var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split(' ');

function baskara(a,b,c) {
    var delta = (b ** 2) - 4 * a * c
    if(delta <= 0) {
        return console.log("Impossivel calcular")
    } else  {
        var R1 = (-b + Math.sqrt(delta)) / (2 * a)
        var R2 = (-b - Math.sqrt(delta)) / (2 * a)
        return console.log(`R1 = ${R1.toFixed(5)}\nR2 = ${R2.toFixed(5)}`)
    }
}

baskara(Number(lines[0]),Number(lines[1]),Number(lines[2]))