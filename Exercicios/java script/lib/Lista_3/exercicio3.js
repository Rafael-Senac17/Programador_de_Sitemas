function numero(positivo) {
    if (positivo > 0) {
        return "Positivo"
    } else if (positivo == 0) {
    return "Zero"
    } else 
    return "Negativo"
}

console.log(numero(5))
console.log(numero(-3))
console.log(numero(0))
console.log(numero(1110))
console.log(numero(-987654321))