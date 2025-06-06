let simboloAtual = 'X'; 

function selecionarSimbolo(simbolo) {
  simboloAtual = simbolo;
}


document.querySelectorAll('.casa').forEach(casa => {
  casa.addEventListener('click', () => {
    const p = casa.querySelector('p');
    if (p.textContent === '') {
      p.textContent = simboloAtual;

      
      setTimeout(() => {
        const vencedor = checarVitoria();
        if (vencedor) {
          alert(`O jogador ${vencedor} venceu!`);
          reiniciarJogo();
        } else if (checarEmpate()) {
          alert("Deu velha! Ninguém venceu.");
          reiniciarJogo();
        }
      }, 50); 
    }
  });
});


function checarVitoria() {
  const casas = [...document.querySelectorAll('.casa p')].map(p => p.textContent);

  const combinacoes = [
    [0,1,2], [3,4,5], [6,7,8], 
    [0,3,6], [1,4,7], [2,5,8], 
    [0,4,8], [2,4,6]           
  ];

  for (let combinacao of combinacoes) {
    const [a, b, c] = combinacao;
    if (casas[a] && casas[a] === casas[b] && casas[a] === casas[c]) {
      return casas[a]; 
    }
  }

  return null; 
}


function checarEmpate() {
  return [...document.querySelectorAll('.casa p')].every(p => p.textContent !== '');
}


function reiniciarJogo() {
  document.querySelectorAll('.casa p').forEach(p => p.textContent = '');
}
