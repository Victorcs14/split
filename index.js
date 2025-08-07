// Adiciona nova pessoa ao clicar no botão +
document.getElementById('adicionarPessoa').addEventListener('click', function() {
  const lista = document.getElementById('listaPessoas');
 const li = document.createElement('li');
li.className = 'caixa-pessoa'; // Para estilizar se quiser

const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Nome';

// Botão de deletar
const botaoDeletar = document.createElement('button');
botaoDeletar.innerHTML = '<i class="fas fa-trash"></i>';
botaoDeletar.className = 'botao-deletar';
botaoDeletar.onclick = function () {
  li.remove();
};

li.appendChild(input);
li.appendChild(botaoDeletar);
lista.appendChild(li);

});

// Divide o valor da conta entre as pessoas ao clicar em CALCULAR

document.getElementById('calcular').addEventListener('click', function() {
  const valorContaInput = document.getElementById('valorConta').value.replace(',', '.');
  const valorConta = parseFloat(valorContaInput);

  if (isNaN(valorConta) || valorConta <= 0) {
    document.getElementById('resultado').innerText = 'Digite um valor válido para a conta.';
    return;
  }

  const lista = document.querySelectorAll('#listaPessoas li input');
  const qtdPessoas = lista.length;
  const valorPorPessoa = (valorConta / qtdPessoas).toFixed(2).replace('.', ',');

  // Limpa a lista para reconstruir com os valores ao lado dos nomes
  const ul = document.getElementById('listaPessoas');
  ul.innerHTML = '';
  lista.forEach(input => {
    const li = document.createElement('li');
    li.className = 'caixa-pessoa';
    input.disabled = false; // Permite editar o nome se quiser
    li.appendChild(input);

const span = document.createElement('span');
span.textContent = ` R$ ${valorPorPessoa}`;
li.appendChild(span);

// Botão de deletar também no resultado
const botaoDeletar = document.createElement('button');
botaoDeletar.innerHTML = '<i class="fas fa-trash"></i>';
botaoDeletar.className = 'botao-deletar';
botaoDeletar.onclick = function () {
  li.remove();
};
li.appendChild(botaoDeletar);

ul.appendChild(li);

  });

  // Limpa o resultado, pois agora o valor aparece ao lado dos nomes
  document.getElementById('resultado').innerHTML = '';
  // Limpa todos os campos ao clicar em REFRESH
document.getElementById('refresh').addEventListener('click', function () {
  // Limpa o valor da conta
  document.getElementById('valorConta').value = '';

  // Limpa o resultado
  document.getElementById('resultado').innerText = '';

  // Limpa a lista de pessoas
  const lista = document.getElementById('listaPessoas');
  lista.innerHTML = '';
});
document.getElementById('botaoDezPorCento').addEventListener('click', function () {
  const valorContaInput = document.getElementById('valorConta').value.replace(',', '.');
  const valorConta = parseFloat(valorContaInput);

  if (isNaN(valorConta) || valorConta <= 0) {
    document.getElementById('resultado').innerText = 'Digite um valor válido para a conta.';
    return;
  }

  const lista = document.querySelectorAll('#listaPessoas li input');
  const qtdPessoas = lista.length;

  if (qtdPessoas === 0) {
    document.getElementById('resultado').innerText = 'Adicione pelo menos uma pessoa.';
    return;
  }

  const valorCom10PorCento = valorConta * 1.1; // soma os 10%
  const valorPorPessoa = (valorCom10PorCento / qtdPessoas).toFixed(2).replace('.', ',');

  // Atualiza visualmente
  const ul = document.getElementById('listaPessoas');
  ul.innerHTML = '';
  lista.forEach(input => {
    const li = document.createElement('li');
    li.className = 'caixa-pessoa';
    input.disabled = false;

    const span = document.createElement('span');
    span.textContent = ` R$ ${valorPorPessoa}`;
    
    const botaoDeletar = document.createElement('button');
    botaoDeletar.innerHTML = '<i class="fas fa-trash"></i>';
    botaoDeletar.className = 'botao-deletar';
    botaoDeletar.onclick = function () {
      li.remove();
    };

    li.appendChild(input);
    li.appendChild(span);
    li.appendChild(botaoDeletar);
    ul.appendChild(li);
  });

  document.getElementById('resultado').innerHTML = '';
});


});