function numero(n1,n2,n3) {
   //var menor = n1  
    if (n2 > n1){ 
        n1 = n2 }

    if (n1 < n3){
        n1 = n3
    } 
    return n1
}
console.log(numero(3,7,5))
console.log(numero(-1,-5,-3))
console.log(numero(8,2,10))
