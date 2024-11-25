function bissexto(ano) {
     if(ano % 400 === 0) return true

     if (ano % 100 === 0) return false

     if (ano % 4 === 0) return true

       return false;  

 }
 
console.log(bissexto(2020)) 
console.log(bissexto(2024)) 
console.log(bissexto(1999)) 
console.log(bissexto(2014)) 
console.log(bissexto(2025))
console.log(bissexto(1900))
console.log(bissexto(2000))
console.log(bissexto(2100))