let horas = 0
let minutos = 0
let segundos = 0
let intervalo;
let pausado = false;

function atualizarDisplay() {
    document.getElementById('hora').textContent = horas.toString().padStart(2, '0');
    document.getElementById('minuto').textContent = minutos.toString().padStart(2, '0');
    document.getElementById('segundo').textContent = segundos.toString().padStart(2, '0');
}
function começar(){
        if(intervalo) return
        intervalo = setInterval(() => {
        segundos++;
        document.getElementById('segundo').textContent = segundos;
        document.getElementById('minuto').textContent = minutos;
        document.getElementById('hora').textContent = horas;
        if(segundos < 10){
            segundos = segundos
        }
        if (segundos === 59) {
            segundos = 0;
            minutos ++;
           
        }
        if(minutos === 59){
            minutos = 0;
            horas ++;
        }
        if(horas === 23){
            horas = 0;
        }
        atualizarDisplay();
    },1000); 
}
function reiniciar(){
   
    horas = 0;
    minutos = 0;
    segundos = 0;

    document.getElementById('hora').textContent = '00';
    document.getElementById('minuto').textContent = '00';
    document.getElementById('segundo').textContent = '00';
    atualizarDisplay();
    document.getElementById('parar').innerText = 'Parar';
}
function parar(){
    if (!pausado) {
        clearInterval(intervalo);
        intervalo = null;
        pausado = true;
        document.getElementById('parar').innerText = 'Continuar';
    } else {
        começar();
        pausado = false;
        document.getElementById('parar').innerText = 'Parar';
    }
}
