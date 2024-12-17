import { soma } from "../Lista_2/Biblioteca.js"

var lis = "3 7 9 10 13"
console.log(lis.split(' ').map(Number).reduce((a , b,Index ,lis) => a + b / lis.length, 0))
var lis2 = "10 70 30 50"
console.log(lis2.split(' ').map(Number).reduce((a ,b ,Index ,lis) => a + b / lis.length, 0))
var lis3 = "29 567 38 53 503 92 67 909 203 382 28"
console.log(lis3.split(' ').map(Number).reduce((a ,b ,Index ,lis) => a + b / lis.length, 0))
var lis4 = "1 2 4 5 7 8 10 11"
console.log(lis4.split(' ').map(Number).reduce((a ,b ,Index ,lis) => a + b / lis.length, 0))