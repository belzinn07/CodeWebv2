// Script para abrir e fechar o menu lateral
const menuToggle = document.getElementById('menuToggle');
const sidenav = document.getElementById('sidenav');
const mainContent = document.querySelector('.main-content');

menuToggle.addEventListener('click', () => {
  sidenav.classList.toggle('open'); // Adiciona ou remove a classe 'open'
  mainContent.classList.toggle('shift'); // Adiciona ou remove a classe 'shift' no conteúdo principal
});