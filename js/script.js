// Función para cargar contenido desde un archivo txt y mostrarlo en un elemento
async function cargarContenido(url, elementoId) {
  try {
    const respuesta = await fetch(url);
    if (!respuesta.ok) throw new Error("No se pudo cargar el archivo");
    const texto = await respuesta.text();
    document.getElementById(elementoId).innerHTML = texto;
    // Añadir clase para animación al cargar contenido
    document.getElementById(elementoId).classList.add('visible');
  } catch (error) {
    document.getElementById(elementoId).innerHTML = "Error al cargar el contenido.";
    console.error(error);
  }
}

// Detectar la página y cargar el contenido correspondiente
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  if (path.includes('index.html') || path === '/' || path === '') {
    cargarContenido('textos/informatica.txt', 'contenido');
  } else if (path.includes('electronica.html')) {
    cargarContenido('textos/electronica.txt', 'contenido');
  } else if (path.includes('electricidad.html')) {
    cargarContenido('textos/electricidad.txt', 'contenido');
  } else if (path.includes('contacto.html')) {
    cargarContenido('textos/contacto.txt', 'contenido');
  }

  // Actualizar año del footer automáticamente
  const year = new Date().getFullYear();
  const footer = document.querySelector('footer p');
  if (footer) {
    footer.textContent = `© ${year} Mi Nombre`;
  }
});
