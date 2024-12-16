function  calcularArea(largura,altura)  { 
var n1 = Number(largura)
var n2 = Number(altura)
var resultado = n1 * n2
return resultado }

var area = calcularArea(5,10)
var area2 = calcularArea(7,3)
var area3 = calcularArea(8,4)
      
console.log(`A area do retangulo é igual a ${area}, ${area2}, ${area3}`)