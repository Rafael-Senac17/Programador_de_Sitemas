"Biblioteca lista 4"
export function somar(lista) {
    var soma = 0;
    for (var x = 0; x < lista.length; x++) {
        soma += lista[x];
    }
    console.log(soma)
}
export function somarPares(lista) {
var soma = 0
for (var x = 0; x < lista.length; x++) {
if (lista[x] % 2 === 0) {
soma += lista[x]
}
}
console.log(soma)
}
export function somarAlgarismo(lista1) {
var soma = 0;
var lista = lista1.toString().split('')
for (var x = 0; x < lista.length; x++) {
soma += Number(lista[x]);
}
console.log(soma)
}
export function verificacao(x) {
if (isNaN(x)) {
return "False";
}return "True";}
export function contarVogais(a) {
var cont = 0
for (var x = 0; x < a.length; x++) {
if (a.charAt(x) == "a" || a.charAt(x) == "e" || a.charAt(x) == "i" || a.charAt(x) == "o" || a.charAt(x) == "u") {
cont++
}}console.log(cont)}
export function Anagrama(a, b) {
var x = a.split('').sort().join('')
var y = b.split('').sort().join('')   
return x === y
}
    