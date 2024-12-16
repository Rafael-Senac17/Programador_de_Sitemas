function  media(x,y,z)  { 
var n1 = Number(x)
var n2 = Number(y)
var n3 = Number(z)
var resultado = (n1 + n2 + n3) / 3
return resultado }
    
var media1 = media(10,20,30)
var media2 = media(5,15,25)
var media3 = media("2","2","2")
    
console.log(`A media das tres é igual a ${media1}, ${media2}, ${media3}`)