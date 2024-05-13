let num = [5, 8, 9, 3]
num.sort()
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} elementos`)
console.log(`O primeiro elemento do vetor é ${num[0]}`)
let pos = num.indexOf(2)
if (pos == -1) {
    console.log('O valor não existe dentro do vetor, escolha outro valor')
} else {
    console.log(`O valor 8 está na posição ${pos}`)

}
