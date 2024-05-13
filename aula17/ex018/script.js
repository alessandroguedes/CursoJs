function adicionar() {
    let num = document.getElementById('num')
    let res = document.getElementById('res')
    let flista = document.querySelector('select#flista')
    let valores = []

    let x = Number(num.value)

    if (x >= 1 && x <=100) {
        window.alert('OK')
    } else {
        res.innerHTML = `[ERRO], o valor inserido foi ${x}`
    }
}
