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

// Insertar año automáticamente en el footer y cargar el texto correspondiente
document.addEventListener("DOMContentLoaded", () => {
  // Año automático
  const anio = new Date().getFullYear();
  const spanAnio = document.getElementById("anio");
  if (spanAnio) {
    spanAnio.textContent = anio;
  }

  // Ruta actual del archivo cargado
  const ruta = window.location.pathname;
  const archivo = ruta.split("/").pop() || "index.html";

  switch (archivo) {
    case "index.html":
    case "":
      cargarContenido("contenido-principal", "textos/principal.txt");
      break;
    case "informatica.html":
      cargarContenido("contenido-informatica", "textos/informatica.txt");
      break;
    case "electronica.html":
      cargarContenido("contenido-electronica", "textos/electronica.txt");
      break;
    case "electricidad.html":
      cargarContenido("contenido-electricidad", "textos/electricidad.txt");
      break;
  }
});