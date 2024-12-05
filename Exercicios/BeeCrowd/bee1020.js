var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split();

function tempo(a) {
    for(var x1 = 0 ; a >= 365 && a < 365; x1++)
    var a = a - 365
    for(var x2 = 0 ; a >= 30; x2++)
    var a = a - 30
    console.log(`${x1}:${x2}:${a}`)
}

tempo(Number(lines))