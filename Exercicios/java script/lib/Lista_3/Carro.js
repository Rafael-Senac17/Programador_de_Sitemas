var carro1 = {

    modelo: "Maverick v8"
    , cor: "Preto"
    , velocidade: 0
    , acelerar: function () {
        this.velocidade += 5

        // console.log("Acelerou para " + this.velocidade)
    }
    , frear: function () {
        this.velocidade -= 13
        if (this.velocidade < 0) {
            this.velocidade = 0
        }
    }
    , imprimir: function () {
        console.table(this);
    }


}
var carro2 = {
    modelo: "Ferrari"
    , cor: "Preto"
    , velocidade: 0
    , acelerar: function () {
        this.velocidade += 5

        // console.log("Acelerou para " + this.velocidade)
    }
    , frear: function () {
        this.velocidade -= 13
        if (this.velocidade < 0) {
            this.velocidade = 0
        }
    }
    , imprimir: function () {
        console.table(this);
    }
}

while (carro1.velocidade < 80) carro1.acelerar()
while (carro2.velocidade < 110) carro2.acelerar()


while (carro1.velocidade > 0) carro1.frear()
while (carro2.velocidade > 0) carro2.frear()

carro1.imprimir()
carro2.imprimir()
// console.log(carro1.velocidade)


// console.log(carro2.velocidade)