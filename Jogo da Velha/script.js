let simboloAtual = 'X'; // Começa com X por padrão

function selecionarSimbolo(simbolo) {
  simboloAtual = simbolo;
}

// Adiciona os eventos de clique em todas as casas
document.querySelectorAll('.casa').forEach(casa => {
  casa.addEventListener('click', () => {
    const p = casa.querySelector('p');
    if (p.textContent === '') {
      p.textContent = simboloAtual;

      // Espera o navegador renderizar o símbolo antes de verificar
      setTimeout(() => {
        const vencedor = checarVitoria();
        if (vencedor) {
          alert(`O jogador ${vencedor} venceu!`);
          reiniciarJogo();
        } else if (checarEmpate()) {
          alert("Deu velha! Ninguém venceu.");
          reiniciarJogo();
        }
      }, 50); // Espera 50ms para o DOM atualizar
    }
  });
});

// Verifica se houve vitória
function checarVitoria() {
  const casas = [...document.querySelectorAll('.casa p')].map(p => p.textContent);

  const combinacoes = [
    [0,1,2], [3,4,5], [6,7,8], // Linhas
    [0,3,6], [1,4,7], [2,5,8], // Colunas
    [0,4,8], [2,4,6]           // Diagonais
  ];

  for (let combinacao of combinacoes) {
    const [a, b, c] = combinacao;
    if (casas[a] && casas[a] === casas[b] && casas[a] === casas[c]) {
      return casas[a]; // Retorna 'X' ou 'O'
    }
  }

  return null; // Ninguém venceu ainda
}

// Verifica se todas as casas estão preenchidas
function checarEmpate() {
  return [...document.querySelectorAll('.casa p')].every(p => p.textContent !== '');
}

// Reinicia o jogo limpando todas as casas
function reiniciarJogo() {
  document.querySelectorAll('.casa p').forEach(p => p.textContent = '');
}
