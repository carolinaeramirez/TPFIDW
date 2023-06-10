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
  // capturamos los inputs:
  let nombre = document.getElementById("nombre").value;
  let duracion = document.getElementById("duracion").value;
  let tipoCarrera = document.getElementById("tipoCarrera").value;
  // let materiasNro = document.getElementById("materiasNro").value;
  console.log(nombre, duracion, tipoCarrera)
// if(nombre =="" || duracion=="" || tipoCarrera==""|| materiasNro==""){
//   alert("debes completar todos los campos")
//   return false
// }
//   var newCarrera = {
//     nombre: nombre,
//     duracion: duracion,
//     tipoCarrera: tipoCarrera,
//     materiasNro: materiasNro,
//   };
//   console.log("NOMBRE", nombre, duracion, tipo, materiasNro);
//   var datosCarreras = localStorage.getItem("carreras");
//   if (datosCarreras) {
//     listArray = JSON.parse(datosCarreras);
//   } else {
//     var listArray = [];
//   }
//   listArray.push(newCarrera);
//   localStorage.setItem("carreras", JSON.stringify(listArray))
//   console.log(listArray)
}

