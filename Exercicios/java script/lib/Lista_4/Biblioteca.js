"Biblioteca lista 4"
import {soma} from "../Lista_2/Biblioteca.js"
import { verificarPar } from "../Lista_3/Biblioteca3.js"

export function somarLista(lista) {
 return lista.reduce(soma,0)
}
export function somarPares(lista) {
var num = lista.filter(verificarPar)
return num.reduce(soma,0)
}
export function somarAlgarismo(lista1) {
var lista = lista1.toString().split('')
return lista.reduce(soma)
}
export function verificacao(x) {
if (isNaN(x)) {
return "False";
}return "True";
}
export function contarVogais(a) {
var cont = 0
for (var x = 0; x < a.length; x++) {
if (a.charAt(x) == "a" || a.charAt(x) == "e" || a.charAt(x) == "i" || a.charAt(x) == "o" || a.charAt(x) == "u") {
cont++
}}console.log(cont)
}
export function Anagrama(a, b) {
var x = a.split('').sort().join('')
var y = b.split('').sort().join('')   
return x === y
}