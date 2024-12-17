import { soma } from "../Lista_2/Biblioteca.js"

console.log([1, 2, 3, 4, 5].reduce(soma,0))
console.log([2, 4, 6, 8].reduce(soma,0))
console.log([1, 3, 5, 7].reduce(soma,0))
console.log([0].reduce(soma,0))
console.log([].reduce(soma,0))
