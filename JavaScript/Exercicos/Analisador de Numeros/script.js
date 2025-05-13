let valores=[]
function adicionar(){
    let numero = document.getElementById('txt1').value
    let lista = document.getElementById('lista')

    if(numero == ''){
        alert('[ERRO] Verifique se todos os campos foram preenchidos')
        return
    }
    
    numero = Number(numero)
    
    if(numero>100 || numero<1){
        alert('O numero digitado não pode ser maior que 100 ou menor que 1')
        return
    }
    
    if(valores.includes(numero)){
        alert('Esse número já foi adicionado')
        return
    }

    valores.push(numero)

    let item = document.createElement('option')
    item.text = `Valor ${numero} adicionado`
    lista.appendChild(item)

    document.getElementById('txt1').value = ''
    document.getElementById('txt1').focus()

}

function verificar(){
    let maior = Math.max(...valores)
    let menor = Math.min(...valores)
    let res = document.getElementById('res')
    let cont = valores.length
    
let soma = 0
for(let i = 0; i < valores.length; i++) {
    soma += valores[i]
}
let media = soma/cont
    
res.innerText = `O maior valor é: ${maior}
                    O menor valor é: ${menor}
                    A quantidade de numeros cadastrados é: ${cont}
                    A soma de todos os valores é: ${soma}
                    A media é: ${media.toFixed(2)}`

}