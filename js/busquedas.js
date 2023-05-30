function buscar() {
  document
    .getElementById("busqueda-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      const datoIngresado = document.getElementById("datoBusc").value; //capturamos el dato ingresado en el input de busqueda
      // traemos los datos guardados en localStorage
      var storedData = localStorage.getItem("datos");
      //parseamos esos datos
      var datosAlmacenados = JSON.parse(storedData);
      // filtramos los datos parseados y le decimos que muestre los que incluyan el dato ingresado
      var resultados = datosAlmacenados.filter(function (item) {
        var nombreItem = item.dni;
        if (nombreItem === datoIngresado) {
          return item;
        } else {
          console.log("no se encuentra el dato");
        }
      });
      //convertimos los resultados en objeto para poder mostrarlos
      result = JSON.stringify(resultados);
      console.log(result);
      return resultados;
    });
}
