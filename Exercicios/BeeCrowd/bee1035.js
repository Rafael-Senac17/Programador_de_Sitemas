var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split(' ');

function teste(a, b, c, d) {
    if (b > c) {

        if (d > a) {
            if (c + d > a + b) {
                if (c > 0 && d > 0) {
                    if (a % 2 == 0) {

                    }
                }
            }
            return console.log("Valores aceitos")
        }
    } else {
        return console.log("Valores nao aceitos")
    }

}

teste(Number(lines[0]), Number(lines[1]), Number(lines[2]), Number(lines[3]))