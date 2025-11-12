// Script simples para validação e interatividade

document.querySelector('.form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Obrigado! Entraremos em contato em breve.');
  this.reset();
});

// Animação de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

console.log('Ogital - Protótipo Web Carregado ✓');
