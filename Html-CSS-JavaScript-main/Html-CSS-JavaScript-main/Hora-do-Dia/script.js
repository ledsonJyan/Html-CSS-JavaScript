function carregar(){
    msg = document.getElementById('msg')
    img = document.getElementById('imagem')
    agora = new Date()
    hora = agora.getHours()
    minutos = agora.getMinutes()
    if (hora >= 0 && hora < 12) {
        msg.innerText = `Agora são ${hora}:${minutos}\nBom dia`;
        img.src='imagens/amanhecer.png'
        document.body.style.background ='#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        msg.innerText = `Agora são ${hora}:${minutos}\nBoa tarde`;
        img.src = 'imagens/entardecer.png'
        document.body.style.background ='#b9846f'
    } else {
        msg.innerText = `Agora são ${hora}:${minutos}\nBoa noite`;
        img.src= 'imagens/noite.png'
        document.body.style.background ='#515154'
    }
}
