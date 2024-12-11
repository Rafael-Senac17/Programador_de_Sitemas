var lista = [1, 2, 3, 4, 5]
var lista2 = [-1, -2, -3, -4, -5]
var lista3 = [10, 20, 30, 40, -50]
var lista4 = []

console.log(Math.max.apply(null, lista))
console.log(Math.max.apply(null, lista2))
console.log(Math.max.apply(null, lista3))
console.log(Math.max.apply(null, lista4))