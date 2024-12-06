function somar(lista) {
var soma = 0;
for (var x = 0; x < lista.length; x++) {
soma += lista[x];
    }
console.log(soma)
}

somar([1, 2, 3, 4, 5])
somar([2, 4, 6, 8])
somar([1, 3, 5, 7])
somar([0])
somar([])
