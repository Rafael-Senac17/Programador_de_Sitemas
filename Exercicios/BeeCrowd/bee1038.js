var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split(' ');


function preco(a, b) {
    if (a == 1) {
        var um = b * 4
        return console.log(`Total: R$ ${um}`)
    } else
    if (a == 2) {
        var dois = b * 4.50
        return console.log(`Total: R$ ${dois}`)
    } else
    if (a == 3) {
        var tres = b * 5
        return console.log(`Total: R$ ${tres}`)
    }
    else if (a == 4) {
        var quatro = b * 2
        return console.log(`Total: R$ ${quatro}`)
    } else
    if (a == 5) {
        var cinco = b * 1.50
        return console.log(`Total: R$ ${cinco}`)
    }


}

preco(Number(lines[0]),Number(lines[1]))


