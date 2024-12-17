import { soma } from "../Lista_2/Biblioteca.js"
import { verificarPar } from "../Lista_3/Biblioteca3.js"

console.log([1, 2, 3, 4, 5].filter(verificarPar).reduce(soma,0))
console.log([2, 4, 6, 8].filter(verificarPar).reduce(soma,0))
console.log([1, 3, 5, 7].filter(verificarPar).reduce(soma,0))