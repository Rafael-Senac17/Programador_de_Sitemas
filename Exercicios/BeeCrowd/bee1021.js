var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split();



let n = Number(lines)




var n100 = Math.floor(n/100); n%=100
var n50 = Math.floor(n/50); n%=50
var n20 = Math.floor(n/20); n%=20
var n10 = Math.floor(n/10); n%=10
var n5 = Math.floor(n/5); n%=5
var n2 = Math.floor(n/2); n%=2

console.log(`Notas:\n${n100} nota(s) de R$ 100.00\n${n50} nota(s) de R$ 50.00\n${n20} nota(s) de R$ 20.00\n${n10} nota(s) de R$ 10.00\n${n5} nota(s) de R$ 5.00\n${n2} nota(s) de R$ 2.00`)

var n1 = Math.floor(n/1); n%=1
var n050 = Math.floor(n/0.50); n%=0.50
var n025 = Math.floor(n/0.25); n%=0.25
var n010 = Math.floor(n/0.10); n%=0.10
var n005 = Math.floor(n/0.05); n%=0.05
var n001 = n / n; n&= 0.05
console.log(`MOEDAS:\n${n1} moeda(s) de R$ 1,00\n${n050} moeda(s) de R$ 0.50\n${n025} moeda(s) de R$ 0.25\n${n010} moeda(s) de R$ 0.10\n${n005} moeda(s) de R$ 0.05\n${n001} moeda(s) de R$ 0.01`)
console.log(n)

