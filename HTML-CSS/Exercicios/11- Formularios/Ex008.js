let n1 = Number(document.getElementById('in1').value);
let n2 = Number(document.getElementById('in2').value);

function somar(event){
    event.preventDefault();
    let resultado = n1 + n2;
    document.getElementById('isoma').value = resultado;
}
