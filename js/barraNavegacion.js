const enlaces = document.querySelectorAll('nav a');

// Agregar un evento de clic a cada enlace
enlaces.forEach((enlace) => {
  enlace.addEventListener('click', (event) => {
    // Prevenir el comportamiento predeterminado de la navegación
    event.preventDefault();

    // Obtener el archivo HTML que se debe cargar
    const archivo = enlace.getAttribute('href');

    // Redirigir al archivo HTML
    window.location.href = archivo;
  });
});