document.addEventListener('DOMContentLoaded', () => {
  // Cargar texto desde archivo .txt si hay un #contenido
  const seccion = document.getElementById('contenido');
  if (seccion) {
    const nombre = location.pathname.split('/').pop().replace('.html', '') || 'index';
    fetch(`textos/${nombre}.txt`)
      .then(res => res.text())
      .then(texto => {
        seccion.innerText = texto;
      });
  }

  // Animación al hacer scroll
  const animaciones = document.querySelectorAll('[data-animacion]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  animaciones.forEach(el => observer.observe(el));
});
