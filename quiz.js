var nome = prompt("Olá futura programadora! Por favor, informe o seu nome:");
//document.write("Olá, " + nome);
const name = document.getElementById('name')
name.innerHTML = nome

const form = document.getElementById('questao1');
const resultado = document.getElementById('resultado1');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const resposta = form.opcao.value;
  if (resposta === 'certa') {
    resultado.textContent = 'Resposta correta!';
  } else {
    resultado.textContent = 'Resposta incorreta. Tente novamente.';
  }
});

const form2 = document.getElementById('questao2');
const resultado2 = document.getElementById('resultado2');

form2.addEventListener('submit', (event) => {
  event.preventDefault();
  const resposta = form2.opcao2.value;
  if (resposta === 'certa') {
    resultado2.textContent = 'Resposta correta!';
  } else {
    resultado2.textContent = 'Resposta incorreta. Tente novamente.';
  }
});

const form3 = document.getElementById('questao3');
const resultado3 = document.getElementById('resultado3');

form3.addEventListener('submit', (event) => {
  event.preventDefault();
  const resposta = form3.opcao3.value;
  if (resposta === 'certa') {
    resultado3.textContent = 'Resposta correta!';
  } else {
    resultado3.textContent = 'Resposta incorreta. Tente novamente.';
  }
});

const form4 = document.getElementById('questao4');
const resultado4 = document.getElementById('resultado4');

form4.addEventListener('submit', (event) => {
  event.preventDefault();
  const resposta = form4.opcao4.value;
  if (resposta === 'certa') {
    resultado4.textContent = 'Resposta correta!';
  } else {
    resultado4.textContent = 'Resposta incorreta. Tente novamente.';
  }
});

const form5 = document.getElementById('questao5');
const resultado5 = document.getElementById('resultado5');

form5.addEventListener('submit', (event) => {
  event.preventDefault();
  const resposta = form5.opcao5.value;
  if (resposta === 'certa') {
    resultado5.textContent = 'Resposta correta!';
  } else {
    resultado5.textContent = 'Resposta incorreta. Tente novamente.';
  }
});