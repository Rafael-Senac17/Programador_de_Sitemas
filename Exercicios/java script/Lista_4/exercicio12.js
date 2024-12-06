function somar(lista1) {
    var soma = 0;
    var lista = lista1.toString().split('')
    for (var x = 0; x < lista.length; x++) {
   soma += Number(lista[x]);
     }
    console.log(soma)
    }
    
somar(123)
somar(456789)
somar(8423416542984721)

