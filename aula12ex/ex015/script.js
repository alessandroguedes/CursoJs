function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano').value
    var res = document.querySelector('div#res')
    if (fano.length == 0 || fano > ano) {
        window.alert('[ERRO] Verifique os dados novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano 
        res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto') // é a mesma coisa se criasse no HTML <img id="foto">
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                imagem.setAttribute('src', 'bebe-m.jpg')
            } else if (idade >=10 && idade < 18) {
                imagem.setAttribute('src', 'jovem-m.jpg')
            } else if (idade > 18 && idade < 65) {
                imagem.setAttribute('src', 'adulto-m.jpg')
            } else if (idade >= 65) {
                imagem.setAttribute('src', 'idoso-m.jpg')
            }
        } else {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                imagem.setAttribute('src', 'bebe-f.jpg')
            } else if (idade >=10 && idade < 18) {
                imagem.setAttribute('src', 'jovem-f.jpg')
            } else if (idade > 18 && idade < 65) {
                imagem.setAttribute('src', 'adulta-f.jpg')
            } else {
                imagem.setAttribute('src', 'idosa-f.jpg')
            }
            
        }
        
        res.innerHTML = `Detectamos o ${genero} com ${idade} anos`
        res.style.textAlign = 'center'
        res.appendChild(imagem)
    }
}