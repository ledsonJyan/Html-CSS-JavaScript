let numero = ''
let operador = ''
function insert(num){
    if(num=='C'){
        numero = ''
    }else{
        numero += num
    }
    document.getElementById('tela').innerHTML = numero 
}
function backspace(){
    let back_space = document.getElementById('tela').innerHTML;
    back_space = back_space.substring(0, back_space.length - 1);
    document.getElementById('tela').innerHTML = back_space;
    numero = back_space;
}
function calcular(){
    let calculo =  document.getElementById('tela').innerHTML;
    if(calculo){
        let resultado = document.getElementById('tela').innerHTML = eval(calculo)
        numero = resultado
    }
}