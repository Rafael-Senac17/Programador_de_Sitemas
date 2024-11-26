function encontarPrimo(np) {
    if (np < 2) return false;
    for(var Div = 2; Div < np; Div++) {
        if(np % Div == 0) {
            return false
        } }
            return true
        }
    


        console.log(encontarPrimo(7))
        console.log(encontarPrimo(10))
        console.log(encontarPrimo(13))
        console.log(encontarPrimo(0))
        console.log(encontarPrimo(1))
        console.log(encontarPrimo(2))
        console.log("------------------")
        console.log(encontarPrimo(327))
        console.log(encontarPrimo(847))
        console.log(encontarPrimo(1573))
        console.log(encontarPrimo(31))
        console.log(encontarPrimo(-3))
        console.log(encontarPrimo(-31))