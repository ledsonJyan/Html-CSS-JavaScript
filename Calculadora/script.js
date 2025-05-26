let numero = ''
let operador = ''
function insert(num){
    if(numero==''){
        numero = num
        document.getElementById('tela').innerHTML = numero 

    }else if(num=='C'){
        numero = ''
        document.getElementById('tela').innerHTML = numero 
    }else if(numero==''){
        numero+=numero
        document.getElementById('tela').innerHTML = numero 
    }
    else{
        numero = numero + num
        document.getElementById('tela').innerHTML = numero 
    }
    console.log(numero)
}
