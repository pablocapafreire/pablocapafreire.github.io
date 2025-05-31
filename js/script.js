// script.js

// Función para cargar contenido desde archivo .txt
function cargarContenido(id, archivo) {
  fetch(archivo)
    .then(res => res.text())
    .then(texto => {
      document.getElementById(id).innerHTML = texto.replace(/\n/g, '<br>');
    })
    .catch(error => {
      console.error('Error al cargar el archivo:', error);
      document.getElementById(id).innerHTML = 'No se pudo cargar el contenido.';
    });
}

// Insertar año automáticamente en el footer
document.addEventListener("DOMContentLoaded", () => {
  const anio = new Date().getFullYear();
  document.getElementById("anio").textContent = anio;

  const ruta = window.location.pathname;
  if (ruta.includes("informatica.html")) {
    cargarContenido("contenido-informatica", "textos/informatica.txt");
  } else if (ruta.includes("electronica.html")) {
    cargarContenido("contenido-electronica", "textos/electronica.txt");
  } else if (ruta.includes("electricidad.html")) {
    cargarContenido("contenido-electricidad", "textos/electricidad.txt");
  }
});