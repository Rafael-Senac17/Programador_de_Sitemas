var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');
var media = lines[0].split(' ').map(Number)
var exame = lines[1].split().map(Number)
console.log(media)
console.log(exame)


function avaliar(a,b,c,d,e){
var media = (a + b + c + d) / 4
if(media >= 7.0){return console.log(`Media: ${media.toFixed(1)}\nAluno aprovado.`)}
if(media < 5.0){return console.log(`Media: ${media.toFixed(1)}\nAluno reprovado.`)}
if(media >= 5.0 && media <= 6.9){var media2 = (media + e) / 2}
if(media2 > 5.0){return console.log(`Media: ${media.toFixed(1)}\nAluno em exame.\nNota do exame: ${e}\nAluno aprovado.\nMedia final: ${media2.toFixed(1)}`)}
if(media2 < 5.0){return console.log(`Media: ${media.toFixed(1)}\nAluno em exame.\nNota do exame: ${e}\nAluno reprovado.`)}


}
const [n1,n2,n3,n4] = media
const [n5] = exame

avaliar(n1,n2,n3,n4,n5)

"Quando não tem exame esta tendo erro"