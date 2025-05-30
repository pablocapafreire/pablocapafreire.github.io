// Función para cargar texto desde archivo .txt y mostrarlo en el contenedor indicado
async function cargarTexto(url, contenedorId) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Error al cargar el archivo ' + url);
    const texto = await response.text();
    document.getElementById(contenedorId).innerHTML = texto.replace(/\n/g, '<br>');
  } catch (error) {
    console.error(error);
  }
}

// Función para efecto al hacer scroll: mostrar contenido con clase 'visible'
function efectoScroll() {
  const sections = document.querySelectorAll('section');
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
}

// Actualiza el año del footer automáticamente
function actualizarAnioFooter() {
  const anioSpan = document.getElementById('anio');
  if (anioSpan) {
    anioSpan.textContent = new Date().getFullYear();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Carga el texto según el id del contenedor (depende de la página)
  if (document.getElementById('contenido-principal')) {
    cargarTexto('txt/principal.txt', 'contenido-principal');
  } else if (document.getElementById('contenido-informatica')) {
    cargarTexto('txt/informatica.txt', 'contenido-informatica');
  } else if (document.getElementById('contenido-electronica')) {
    cargarTexto('txt/electronica.txt', 'contenido-electronica');
  } else if (document.getElementById('contenido-electricidad')) {
    cargarTexto('txt/electricidad.txt', 'contenido-electricidad');
  }

  actualizarAnioFooter();
  efectoScroll();
});

window.addEventListener('scroll', efectoScroll);
