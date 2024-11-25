function obeterMenor(a,b,c) {
    let menor
    if (a < b) {
        menor = a
    } else {
        menor = b
    }
    if (c < menor) {
        menor = c
    } else{
        menor = menor
    }
     

    return menor
}

console.log(obeterMenor(3,5,7))
console.log(obeterMenor(-1,-5,-3))
console.log(obeterMenor(8,2,10))