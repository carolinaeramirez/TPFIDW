// const openEls = document.querySelectorAll("[data-open]");
// const closeEls = document.querySelectorAll("[data-close]");
// const isVisible = "is-visible";

// for (const el of openEls) {
//   el.addEventListener("click", function() {
//     const modalId = this.dataset.open;
//     document.getElementById(modalId).classList.add(isVisible);
//   });
// }

// for (const el of closeEls) {
//   el.addEventListener("click", function() {
//     this.parentElement.parentElement.parentElement.classList.remove(isVisible);
//   });
// }

// document.addEventListener("click", e => {
//   if (e.target == document.querySelector(".modal.is-visible")) {
//     document.querySelector(".modal.is-visible").classList.remove(isVisible);
//   }
// });

// document.addEventListener("keyup", e => {
//   // if we press the ESC
//   if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
//     document.querySelector(".modal.is-visible").classList.remove(isVisible);
//   }
// });

function buscar() {
  document
    .getElementById("busqueda-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      const datoIngresado = document.getElementById("datoBusc").value;
      const opciones = document.getElementById("parametro").value;
      console.log(opciones)
      var storedData = localStorage.getItem("datos");
      var datosAlmacenados = JSON.parse(storedData);
      datosAlmacenados.filter(function (item) {
        if (item.dni === datoIngresado) {
           console.log(item);
          // return item;
        } else {
          // console.log("no se encuentra el dato");
        }
      });
      //convertimos los resultados en objeto para poder mostrarlos
      // result = JSON.stringify(resultados);
      // console.log(result);
      // return resultados;
    });
}

var accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(function(header) {
  header.addEventListener('click', function() {
    var accordionItem = this.parentNode;
    var accordionContent = accordionItem.querySelector('.accordion-content');
    
    if (accordionItem.classList.contains('active')) {
      accordionItem.classList.remove('active');
      accordionContent.style.display = 'none';
    } else {
      accordionItem.classList.add('active');
      accordionContent.style.display = 'block';
    }
  });
});