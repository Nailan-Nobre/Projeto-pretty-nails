const container = document.querySelector('.container'); 
const cadastroBtn = document.querySelector('.cadastro-btn');
const loginBtn = document.querySelector('.login-btn');

cadastroBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});


//Função para guardar informações de novos usuários
document.getElementById('cadastroForm').addEventListener('submit', function (event) {
event.preventDefault(); // Impede o envio do formulário
  
// Obtém os valores dos campos
var nome = document.getElementById('nome').value;
var email = document.getElementById('email').value;
var cidade = document.getElementById('cidade').value;
var senha = document.getElementById('senha').value;
  
// Armazena os valores no Local Storage
localStorage.setItem('nome', nome);
localStorage.setItem('email', email);
localStorage.setItem('cidade', cidade);
localStorage.setItem('senha', senha);
  
// Redireciona para a página de perfil
window.location.href = 'perfil.html';
});
  
