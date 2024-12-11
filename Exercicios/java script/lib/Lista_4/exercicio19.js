function Anagrama(a, b) {
    var x = a.split('').sort().join('')
    var y = b.split('').sort().join('')

    return x === y
}

console.log(Anagrama("listen","silent"))
console.log(Anagrama("hello","world"))
console.log(Anagrama("evil", "vile"))