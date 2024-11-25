function obeterMaior(a,b,c) {
    let maior
    if (a > b) {
        maior = a
    } else {
        maior = b
    }
    if (c > maior) {
        maior = c
    } else{
        maior = maior
    }
     
   return maior
}

console.log(obeterMaior(3,5,7))
console.log(obeterMaior(-1,-5,-3))
console.log(obeterMaior(8,2,10))