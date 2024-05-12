function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var cor = window.document.getElementById('cor')
    var hora = data.getHours()
    //var hora = 15
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >=0 && hora < 12) {
        console.log('Bom dia!')
        img.src = 'manha.jpg'
        document.body.style.backgroundColor = 'lightyellow'
    } else if (hora >= 12 && hora <= 18) {
        console.log('Bom tarde!')
       img.src = 'tarde.jpg'
       document.body.style.backgroundColor = 'green'
    } else {
        console.log('Boa noite!')
        img.src = 'noite.jpg'
        document.body.style.backgroundColor = 'gray'
    }
}
