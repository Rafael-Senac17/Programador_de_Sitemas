function nota(valor) {
    if (valor >= 90) {
        return "A"
    } else if (valor >= 80 && valor <= 89) {
        return "B"
    } else if (valor >= 70 && valor <= 79) {
        return "C"
    }else if (valor >= 60 && valor <= 69) {
        return "D"
    } else {
        return "F"
    }
}
console.log(nota(90))
console.log(nota(75))
console.log(nota(60))
console.log(nota(0))
console.log(nota(59))
console.log(nota(89))
console.log(nota(69))
console.log(nota(79))
console.log(nota(99))