function gerar_tabuada() {
    let n = document.getElementById('n')
    let res = document.getElementById('res')

    if (n.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let x = Number(n.value)
       // res.innerHTML = '<br>'
        res.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            
            res.innerHTML += `${x} x ${c} = ${x*c} <br>`
            let item = document.createElement('table') //cria um elemento
            res.appendChild(item) //acrecenta um elemento
           
        }
        
    }
    
}
