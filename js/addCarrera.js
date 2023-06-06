function addcarrera() {
  document.getElementById("addCarrera");
  addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("funciona");
    const nombreCarrera = document.getElementById("carreraNombre").value;
    if (nombreCarrera === "") {
      alert("Por favor ingrese el nombre de la carrera");
      return false;
    }
    const codigoCarrera = document.getElementById("codigo").value;
    if (codigoCarrera === "") {
      alert("Por favor ingrese el codigo de carrera");
      return false;
    }
    const descripcionCarrera = document.getElementById("descripcion").value;
    if (descripcionCarrera === "") {
      alert("Debe ingresar una descripcion de la carrera");
      return false;
    }
    const duracionCarrera = document.getElementById("duracion").value;
    if (duracionCarrera === "") {
      alert("Debe ingresar la duracion de la carrera en años");
      return false;
    }
    const cantMaterias = document.getElementById("materiasNro").value;
    if (cantMaterias === "") {
      alert("Debe ingresar el numero de materias correspondiente a la carrera");
      return false;
    }
    var newCarrera = {
      nombreCarrera: nombreCarrera,
      codigoCarrera: codigoCarrera,
      descripcionCarrera: descripcionCarrera,
      duracionCarrera: duracionCarrera,
      cantMaterias: cantMaterias,
    };
    var storedData = localStorage.getItem("carreras");

    if (storedData) {
      dataArray = JSON.parse(storedData);
    } else {
      var dataArray = [];
    }
    dataArray.push(newCarrera);
    localStorage.setItem("carreras", JSON.stringify(nueva));
    console.log(dataArray);
  });
}
//REVISAR PORQUE CARGA LOS DATOS DOS VECES-
