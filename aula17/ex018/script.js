    let num = document.getElementById('num')
    let res = document.getElementById('res')
    let lista = document.querySelector('select#flista')
    let valores = []

    function isNumero(n) {
        if (Number(n) >= 1 && Number(n) <= 100) {
            return true
        } else {
            return false
        }
    }

    function inLista(n, l) {
        if (l.indexOf(Number(n)) != -1) {
            return true
        } else {
            return false
        }
    }

 function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já cadastrado na lista')
    }
    num.value = ''
    num.focus()
 } 

 function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma/tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor ${maior}</p>`
        res.innerHTML += `<p>O maior valor ${menor}</p>`
        res.innerHTML += `<p>A soma é ${soma} </p>`
        res.innerHTML += `<p>A média é ${media} </p>`
        
    }

    document.body.onload = adicionarElemento;

        function adicionarElemento() {
        let criar_elemento = document.createElement('div')
        let conteudo_na_div = document.createTextNode('Inserindo texto')
        criar_elemento.append(conteudo_na_div)
    }
 }