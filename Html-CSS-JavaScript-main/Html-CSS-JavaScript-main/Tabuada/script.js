function gerar() {
    let numero = document.getElementById('txtnum').value;
    let sel = document.getElementById('sel');
    
    sel.innerHTML = ''; 
    
    if(numero === ''){
        alert('[ERRO] Verifique se preencheu o campo (numero)')
        return;
    }
    for (let i = 1; i <= 10; i++) {
        let item = document.createElement('option');
        item.value = i;
        let value = Number(numero) * i;
        item.text = `${numero} X ${i} = ${value}`;
        sel.appendChild(item);
    }
 }
 