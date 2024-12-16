function  conta(numero)  { 
var n1 = Number(numero)
var resultado =(n1 ** 3) * 4 / 3
return resultado }
    
var volume = conta(3)
var volume2 = conta(5)
var volume3 = conta(1.5)

console.log(`O volume da esfera e ${volume}, ${volume2}, ${volume3}`)