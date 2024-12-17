"Biblioteca - Lista 3"

export function avaliar(media) {
    if (media >= 7.000){
        return "Aprovado"
    } else
    return "Reprovado"
}
export function verificarPar(x) {
    return (x % 2 === 0)
}
export function ImprimirParidade(num){
    return verificarPar(num) ? "Par" : "Impar"
}
export function numero(positivo) {
    if (positivo > 0) {
        return "Positivo"
    } else if (positivo == 0) {
    return "Zero"
    } else 
    return "Negativo"
}
export function obeterMenor(a,b,c) {
    let menor
    if (a < b) {
        menor = a}
    else {
        menor = b }
    if (c < menor) {
        menor = c
    } else{
        menor = menor
    }
     return menor
}
export function obeterMaior(a,b,c) {
    let maior
    if (a > b) {
        maior = a} 
    else {
        maior = b}
    if (c > maior) {
        maior = c} 
    else{
        maior = maior}
    return maior
}
export function multiplos(n1,n2) {
if (n1 % n2 === 0) {
return "True" } 
else {
return "False"}
}
export function bissexto(ano) {
    if(ano % 400 === 0) return true

    if (ano % 100 === 0) return false

    if (ano % 4 === 0) return true

    return false;  

}
export function letra(vogal) {
    if (vogal == "a" || vogal == "e" || vogal == "i" || vogal == "u" || vogal == "o" ) {
        return "Vogal"
    } else {
        return "Consoante"
    }
}
export function nota(valor) {
    if (valor >= 90) {
        return "A"
    } else if (valor >= 80 && valor <= 89) {
        return "B"
    } else if (valor >= 70 && valor <= 79) {
        return "C"
    }else if (valor >= 60 && valor <= 69) {
        return "D"
    } else {
        return "F"
    }
}
export function soma(n) {
    var y2 = 0
    for(var x = 0; x <= n;x++) {
    var y2 = y2 + x}
console.log(y2)
}
export function fatorial(n) {
    var y2 = 1
    for (var x = 1; x <= n; x++){
    y2 = y2 * x
    }
    console.log(y2)
}
export function tabuada(n) {
    for (var x = 0; x <= 10; x ++ ) {
    var n2 = n * x
    let linha = `${n} x ${x} = ${n2}`
    console.log(linha)}
}
export function tabuadaCompleta() {
    for (var x = 1; x <= 10; x ++ ) {     
    for (var n = 1; n <= 10; n++) {
    var n2 = n * x 
    let linha = `${x} x ${n} = ${n2}` 
    console.log(linha)}}    
}
export function encontarPrimo(np) {
    if (np < 2) return false;
    for(var Div = 2; Div < np; Div++) {
    if(np % Div == 0) {
    return false} }
    return true
}
     