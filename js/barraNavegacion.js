// Obtener todos los enlaces de navegación
const navLinks = document.querySelectorAll(".navBar a");

// Agregar un evento de clic a cada enlace de navegación
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Evitar el comportamiento predeterminado de los enlaces

    // Obtener el atributo href del enlace
    const href = link.getAttribute("href");

    // Navegar a la URL especificada en href
    window.location.href = href;
  });
});

// Obtener todos los elementos de menú desplegable
const dropdownItems = document.querySelectorAll(".dropdown-item");

// Agregar un evento de clic a cada elemento de menú desplegable
dropdownItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault(); // Evitar el comportamiento predeterminado de los enlaces

    // Obtener el atributo href del elemento de menú desplegable
    const href = item.getAttribute("href");

    // Navegar a la URL especificada en href
    window.location.href = href;
  });
});
