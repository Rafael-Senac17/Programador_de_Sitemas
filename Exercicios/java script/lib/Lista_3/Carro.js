var carro1 = {

    modelo: "Maverick v8"
    , cor: "Preto"
    , velocidade: 0


}
var carro2 = {
    modelo: "Ferrari"
    , cor: "Preto"
    , velocidade: 0
}


function acelerar(carro) {

    carro.velocidade += 5
}

while (carro1.velocidade < 80) acelerar(carro1)



function desacelerar(carro) {
    carro.velocidade -= 13
    if (carro.velocidade < 0) {
        carro.velocidade = 0
    }
}
while (carro1.velocidade > 0) desacelerar(carro1)

    while (carro2.velocidade > 0) desacelerar(carro2)
        
        
        console.log(carro1.velocidade)


console.log(carro2.velocidade)