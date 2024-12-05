function  conta(x,y)  { 

    var n1 = Number(x)
    var n2 = Number(y)
    var resultado = n1 * n2
    
    return resultado }

var multiplicação = conta(3,7)
var multiplicação2 = conta(6,5)
var multiplicação3 = conta("-2","8")
document.write(`A multiplicação é igual a ${multiplicação}, ${multiplicação2}, ${multiplicação3}`)