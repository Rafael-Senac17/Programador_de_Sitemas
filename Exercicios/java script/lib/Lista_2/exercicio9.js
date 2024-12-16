function  divisao(x,y)  { 
var n1 = Number(x)
var n2 = Number(y)
var resultado = n1 % n2
return resultado }

var divisao1 = divisao(20,3)
var divisao2 = divisao(25,5)
var divisao3 = divisao(100,10)
var divisao4 = divisao(100,30)
var divisao5 = divisao(100,33)
    
console.log(`O resto da divisao é ${divisao1}, ${divisao2}, ${divisao3}, ${divisao4}, ${divisao5}`)