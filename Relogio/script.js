let relogio = setInterval(function time(){
    let date_today = new Date();
    let h = date_today.getHours();
    let m = date_today.getMinutes();
    let s = date_today.getSeconds();

    if(h < 10){
        h = '0' + h
    }
    if(m < 10){
        m = '0' + m
    }
    if(s < 10){
        s = '0' + s
    }

   hora.textContent = h;
   minuto.textContent = m;
   segundo.textContent = s;
})