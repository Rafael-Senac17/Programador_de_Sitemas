function media(lista) {
    var soma = 0;
    for (var x = 0; x < lista.length; x++) {
        soma += lista[x];
    } if (soma != 0) {
        var mediana = soma / x
        console.log(mediana)
    } else {
        console.log(soma)
    }
}

media([1, 2, 4, 5, 7, 8, 10, 11])
media([10, 70, 30, 50])
media([29, 567, 38, 53, 503, 92, 67, 909, 203, 382, 28])
media([])