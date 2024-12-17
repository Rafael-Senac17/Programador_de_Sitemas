"Biblioteca lista 4"
import {soma} from "../Lista_2/Biblioteca.js"
import { verificarPar } from "../Lista_3/Biblioteca3.js"

//Lista 4 - Exercicio 9
export function somarLista(lista) {
 return lista.reduce(soma,0)
}
//Lista 4 - Exercicio 10
export function somarPares(lista) {
var num = lista.filter(verificarPar)
return num.reduce(soma,0)
}
//Lista 4 - Exercicio 11
export function media(lista){
var mediana = lista.reduce((a , b,Index ,lis) => a + b / lis.length, 0)
return mediana.toFixed(0)
}
//Lista 4 - Exercicio 12
export function somarAlgarismo(lista1) {
    var lista = lista1.toString().split('')
    return lista.reduce(soma)
}
//Lista 4 - Exercicio 13
export function Maior(lista){
return Math.max.apply(null, lista)
}
//Lista 4 - Exercicio 14
export function removedor(lista){
return lista.replaceAll(" ","")
}
//Lista 4 - Exercicio 15
export function inverter(lista){
return lista.split('').reverse().join('')
}
//Lista 4 - Exercicio 16
export function palindromo(lista){
var lis = lista.split('').reverse().join('')
return lis == lista
}
//Lista 4 - Exercicio 17
export function verificacao(x) {
if (isNaN(x)) {
return "False";
}return "True";
}
//Lista 4 - Exercicio 18
export function contarVogais(a) {
var cont = 0
for (var x = 0; x < a.length; x++) {
if (a.charAt(x) == "a" || a.charAt(x) == "e" || a.charAt(x) == "i" || a.charAt(x) == "o" || a.charAt(x) == "u") {
cont++
}}console.log(cont)
}
//Lista 4 - Exercicio 19
export function Anagrama(a, b) {
var x = a.split('').sort().join('')
var y = b.split('').sort().join('')   
return x === y
}