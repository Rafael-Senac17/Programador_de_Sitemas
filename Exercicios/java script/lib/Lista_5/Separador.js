function separar(frase, separador) {

    var resultado = frase.split(separador)

    return console.log(resultado)
}

separar("JavaScript é muito fácil!", ' ')
console.log("==================")
console.log("Lista de Nomes")
separar("João,Maria,José", ',')
console.log("==================")
console.log("Lista de gmail")
separar("fulano@gmail.com;ciclano@yahoo.com;beltrano@outlook.com", ';')
console.log("===============")
console.log("Separar frases")
separar("Nome -- Sobrenome -- Idade -- País",' -- ')
console.log("===============")
console.log("Lista de Diretorio")
separar("/usr/local/bin", '/')
console.log("==============")
console.log("Separar letras")
separar("JavaScript", '')
console.log("================")
console.log("Separar paragrafo da frase")
separar("O sol está brilhando. O céu está azul. É um ótimo dia!", '. ')
console.log("================")
console.log("Separar dia,mes e ano")
separar("15/08/2024", '/')
console.log("=================")
console.log("Separar hora,min e segundo")
separar("14:35:20", ':')
console.log("================")


console.log("Separar linhas de um texto com múltiplas linhas")
separar("Primeira linha\nSegunda linha\nTerceira linha", '\n')
console.log("==============")

separar("Lorem ipsum dolor sit amet,\nconsectetur adipiscingelit,\nsed do eiusmod tempor incididunt ut labore.", '\n')
console.log("===============")
separar("Linha única sem quebras",)
console.log("================")
separar(`Primeira linha de um texto.
Segunda linha usando template strings.
Terceira linha com mais detalhes.`, '\n')
console.log("====================")
separar(`
 Lorem ipsum dolor sit amet,
 consectetur adipiscing elit.
 Ut enim ad minim veniam.`, '\n')
console.log("==================")
separar(`
Texto com linhas múltiplas e
uso de templates strings
para separação.
`, '\n')
