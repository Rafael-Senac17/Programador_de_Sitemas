var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split(' ');

function Tridu(a, b) {
    if (a == b) {
        return console.log(a)
    }else if (a > b) {
        return console.log(a)
    } else {
        return console.log(b)
    }
}
Tridu(Number(lines[0]),Number(lines[1]))

