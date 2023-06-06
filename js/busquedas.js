function buscar() {
  document
    .getElementById("busqueda-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      const datoIngresado = document.getElementById("datoBusc").value; //capturamos el dato ingresado en el input de busqueda
      var storedData = localStorage.getItem("datos"); // traemos los datos guardados en localStorage
      var datosAlmacenados = JSON.parse(storedData); //parseamos esos datos
      // filtramos los datos parseados y le decimos que muestre los que incluyan el dato ingresado
      datosAlmacenados.filter(function (item) {
        if (item.dni === datoIngresado) {
          // console.log(item);
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
