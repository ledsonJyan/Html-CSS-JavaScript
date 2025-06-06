let simboloAtual = 'X';

function selecionarSimbolo(simbolo) {
  simboloAtual = simbolo;

  document.getElementById('x').style.backgroundColor = simbolo === 'X' ? 'lightblue' : '';
  document.getElementById('o').style.backgroundColor = simbolo === 'O' ? 'lightblue' : '';
}

function checarVitoria() {

  const casas = Array.from(document.querySelectorAll('.casa'));

  const valores = casas.map(casa => casa.querySelector('p').textContent);


  const combinacoes = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  for (const comb of combinacoes) {
    const [a,b,c] = comb;
    if (valores[a] && valores[a] === valores[b] && valores[a] === valores[c]) {
      return valores[a];
    }
  }
  return null;
}

document.querySelectorAll('.casa').forEach(casa => {
  casa.addEventListener('click', () => {
    const p = casa.querySelector('p');
    if (p.textContent === '') {
      p.textContent = simboloAtual;
      
      const vencedor = checarVitoria();
      if (vencedor) {
        alert(`O jogador ${vencedor} venceu!`);
    
        reiniciarJogo();
      }
    }
  });
});

function reiniciarJogo() {
  document.querySelectorAll('.casa p').forEach(p => p.textContent = '');
}

selecionarSimbolo('X');
