function calcular(){
    inicio = document.getElementById('txtnum1').value
    final = document.getElementById('txtnum2').value
    passo = document.getElementById('txtnum3').value
    res = document.getElementById('res')
    
    if(inicio === '' || final === '' || passo === '') {
        alert('[ERRO] Prencha todos os campos corretamente')
        return;
    }
    inicio = Number(inicio)
    final = Number(final)
    passo = Number(passo)

    if(passo<=0){
        alert('Passo não poder ser 0, considerando passo = 1')
        passo = 1
    }
    res.innerText = 'Contando...'
    
    if (inicio < final) {
        
        for (let i = inicio; i <= final; i += passo) {
            res.innerText += ` ${i} 👉`
        }
    } else {
        
        for (let i = inicio; i >= final; i -= passo) {
            res.innerText += ` ${i} 👉`
        }
    }
    res.innerText += ' 🏁'
}