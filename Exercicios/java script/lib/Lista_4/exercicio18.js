function contarVogais(a) {
    var cont = 0
    for (var x = 0; x < a.length; x++) {
        if (a.charAt(x) == "a" || a.charAt(x) == "e" || a.charAt(x) == "i" || a.charAt(x) == "o" || a.charAt(x) == "u") {
            cont++
        }
    }
    console.log(cont)
}

contarVogais("hello")
contarVogais("javascript")
contarVogais("aeiou")