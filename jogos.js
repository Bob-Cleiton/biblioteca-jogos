document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card-jogo');
    const modal = document.getElementById('modal-detalhes');
    const conteudoModal = modal.querySelector('.conteudo-modal');
    const botaoFechar = modal.querySelector('.fechar-modal');
  
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const larguraTela = window.innerWidth;
  
        if (larguraTela < 769) {
          // Mobile: apenas expandir conteúdo no próprio card
          const detalhes = card.querySelector('.detalhes');
          detalhes.classList.toggle('oculto');
        } else {
          // Desktop: abrir modal
          const titulo = card.querySelector('h3').textContent;
          const detalhes = card.querySelector('.detalhes').innerHTML;
  
          conteudoModal.innerHTML = `
            <h2>${titulo}</h2>
            <div>${detalhes}</div>
          `;
  
          modal.classList.add('ativo');
          document.body.classList.add('modal-aberto');
        }
      });
    });
  
    // Fecha o modal ao clicar no botão ×
    botaoFechar.addEventListener('click', function (event) {
      event.stopPropagation();
      modal.classList.remove('ativo');
      document.body.classList.remove('modal-aberto');
    });
  
    // Fecha ao clicar fora do conteúdo
    modal.addEventListener('click', function (event) {
      if (event.target === modal) {
        modal.classList.remove('ativo');
        document.body.classList.remove('modal-aberto');
      }
    });

    // Fecha e limpa o modal ao redimensionar para mobile
window.addEventListener('resize', () => {
    const larguraTela = window.innerWidth;
  
    if (larguraTela < 769) {
      modal.classList.remove('ativo');
      document.body.classList.remove('modal-aberto');
      conteudoModal.innerHTML = ''; // Limpa o conteúdo do modal
    }
  });  
});

  
  
  