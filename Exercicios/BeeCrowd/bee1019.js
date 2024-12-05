var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split();

function tempo(a) {

    if (a > 3600) {
        var seg = a % 60
        var tempo = a / 60
        var hr = Math.floor(tempo) / 60
        var min = Math.floor(tempo) % 60
        return console.log(`${Math.floor(hr)}:${min}:${seg}`)
    } else {
        var hr2 = 0
        var min2 = a / 60
        var seg2 = a % 60
        return console.log(`${hr2}:${Math.floor(min2)}:${seg2}`)
    }


}

tempo(lines)