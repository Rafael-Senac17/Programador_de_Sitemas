function  potencia2(base,expoente)  { 
var n1 = Number(base)
var n2 = Number(expoente)
var resultado = n1 ** n2
return resultado }
    
var conta = potencia2(2,3)
var conta2 = potencia2(5,2)
var conta3 = potencia2(7,0)
    
console.log(`O resultado da potencia é ${conta}, ${conta2}, ${conta3}`)