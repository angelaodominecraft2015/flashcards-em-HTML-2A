function criaCartao(categoria, pergunta, resposta) {
  // Seleciona o container onde os cartões serão inseridos
  const container = document.getElementById('container');

  // Cria o elemento do cartão
  const cartao = document.createElement('article');
  cartao.className = 'cartao';

  // Usa template string correta (com crases ``, não aspas simples '')
  cartao.innerHTML = `
    <div class="cartao__conteudo">
      <h3>${categoria}</h3>
      <div class="cartao__conteudo__pergunta">
        <p>${pergunta}</p>
      </div>
      <div class="cartao__conteudo__resposta">
        <p>${resposta}</p>
      </div>
    </div>
  `;

  // Estado de vis




            
            