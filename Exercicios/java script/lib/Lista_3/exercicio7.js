function bissexto(ano) {
    if (ano % 4 === 0 && ano % 100 != 0) {
        return "True"
    } else {
        return "False"
    }
}
console.log(bissexto(2020)) 
console.log(bissexto(2024)) 
console.log(bissexto(1999)) 
console.log(bissexto(2014)) 
console.log(bissexto(2025))
console.log(bissexto(1900))
console.log(bissexto(2000))
console.log(bissexto(2100))