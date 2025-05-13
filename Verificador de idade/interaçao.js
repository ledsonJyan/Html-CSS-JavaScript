function verificar(){
   img = document.getElementById('foto')
   nascimento = document.getElementById('txtano').value
   agora = new Date()
   ano = agora.getFullYear()
   sex = document.getElementsByName('radsex')
   genero = ''
   idade = ano - Number(nascimento)
   msg = document.getElementById('resposta')
   
   if(sex[0].checked){
       genero = 'Masculino'
   }
   if(sex[1].checked){
       genero = 'Feminino'
   }
  
   if (nascimento.length == 0){
       alert('[ERRO] VERIFIQUE OS SEUS DADOS')
       return;
    }
    if(Number(nascimento)>ano || Number(nascimento)<1900){
        msg.innerText = 'Ano inválido';
        return;
    }
  
   
   if (idade<=5 ){
       if(genero == 'Masculino'){
            msg.innerText = `A sua idade é de ${idade} anos`
       }
       if(genero == 'Feminino'){
            msg.innerText = `A sua idade é de ${idade} anos`
       }
   }
   else if (idade>5 && idade<=10){
       if(genero == 'Masculino'){
            msg.innerText = `A sua idade é de ${idade} anos`
       }
       if(genero == 'Feminino'){
            msg.innerText = `A sua idade é de ${idade} anos`
       }
   }
   else if (idade > 10 && idade <= 19) {
        if(genero == 'Masculino'){
            msg.innerText = `A sua idade é de ${idade} anos`
            img.src = 'fotos de pessoas/menino adolescente.ed.png'
    }
        if(genero == 'Feminino'){
            msg.innerText = `A sua idade é de ${idade} anos`
            img.src = 'fotos de pessoas/menina adolescente.ed.png'
    }
}
    
   else if (idade>19 && idade<=30 ){
        if(genero == 'Masculino'){
            msg.innerText = `A sua idade é de ${idade} anos`
            img.src = 'fotos de pessoas/homem jovem.ed.png'
    }
        if(genero == 'Feminino'){
            msg.innerText = `A sua idade é de ${idade} anos`
            img.src = 'fotos de pessoas/mulher jovem.ed.png'
    }
   }
   else if (idade>30 && idade<=60 ){
        if(genero == 'Masculino'){
            msg.innerText = `A sua idade é de ${idade} anos`
            img.src = 'fotos de pessoas/homem adulto.ed.png'
    }
        if(genero == 'Feminino'){
            msg.innerText = `A sua idade é de ${idade} anos`
            img.src = 'fotos de pessoas/mulher adulta.ed.png'
    }
   }
   else if (idade>60 ){
        if(genero == 'Masculino'){
            msg.innerText = `A sua idade é de ${idade} anos`
            img.src = 'fotos de pessoas/homem idoso.ed.png'
    }
        if(genero == 'Feminino'){
            msg.innerText = `A sua idade é de ${idade} anos`
            img.src = 'fotos de pessoas/mulher idosa.ed.png'
    }
   }
}