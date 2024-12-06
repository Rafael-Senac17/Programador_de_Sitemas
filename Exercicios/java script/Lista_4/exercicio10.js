function somarPares(lista) {
    var soma = 0
    for (var x = 0; x < lista.length; x++) {
        if (lista[x] % 2 === 0) {
            soma += lista[x]

        }

    }
    console.log(soma)
}


somarPares([1, 2, 3, 4, 5])
somarPares([2, 4, 6, 8])
somarPares([1, 3, 5, 7])
