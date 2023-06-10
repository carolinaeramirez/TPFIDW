let index;

function obtenerId() {
  const listadoCarreras = localStorage.getItem("carreras");
  if (listadoCarreras) {
    const listadoArray = JSON.parse(listadoCarreras);
    if (listadoArray.length > 0) {
      index = listadoArray[listadoArray.length - 1].id + 1;
    } else {
      index = 1;
    }
  } else {
    index = 1;
  }
}

function addCarrera() {
  obtenerId();
  console.log("funciona el boton");
  
  // Capturamos los inputs:
  let nombre = document.getElementById("nombre").value;
  let duracion = document.getElementById("duracion").value;
  let tipoCarrera = document.getElementById("tipoCarrera").value;
  
  // Validamos que los campos no estén vacíos
  if (nombre.trim() === "" || duracion.trim() === "" || tipoCarrera.trim() === "") {
    alert("Debes completar todos los campos");
    return false;
  }
  
 
  
  console.log(nombre, duracion, tipoCarrera);
  
  var newCarrera = {
    id: index,
    nombre: nombre,
    duracion: duracion,
    tipoCarrera: tipoCarrera
  };
  
  console.log("NOMBRE", nombre, duracion, tipoCarrera);
  
  var datosCarreras = localStorage.getItem("carreras");
  var listArray = datosCarreras ? JSON.parse(datosCarreras) : [];
  
  listArray.push(newCarrera);
  localStorage.setItem("carreras", JSON.stringify(listArray));
  console.log(listArray);
}