function  multiplicacao(x,y)  { 
var n1 = Number(x)
var n2 = Number(y)
var resultado = n1 * n2
return resultado }

var multiplicação = multiplicacao(3,7)
var multiplicação2 = multiplicacao(6,5)
var multiplicação3 = multiplicacao("-2","8")
console.log(`A multiplicação é igual a ${multiplicação}, ${multiplicação2}, ${multiplicação3}`)