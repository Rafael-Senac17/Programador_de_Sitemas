var ss = n % 60
n -= ss; n/=60
var min = n % 60
n-=min; n/=60
var hh = n

let a2 = Number(lines)
let x1 = a2 / 100
let cem = a2 % 100
let x2 = cem / 50
let cinq = cem % 50
let x3 = cinq / 20
let vent = cinq % 20
let x4 = vent / 10
let dez = vent % 10
let x5 = dez / 5
let cinco = dez % 5
let x6 = cinco / 2
let dois = cinco % 2
let x7 = dois / 1






console.log(`${a2}\n${Math.floor(x1)} nota(s) de R$ 100,00\n${Math.floor(x2)} nota(s) de R$ 50,00\n${Math.floor(x3)} nota(s) de R$ 20,00\n${Math.floor(x4)} nota(s) de R$ 10,00\n${Math.floor(x5)} nota(s) de R$ 5,00\n${Math.floor(x6)} nota(s) de R$ 2,00\n${Math.floor(x7)} nota(s) de R$ 1,00`)
