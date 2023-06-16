let index;
function enviar() {
  window.location.href="tablaAlumn.html"
  obtenerId();
  const nombre = document.getElementById("nombre").value;
  if (nombre === "") {
    alert("Por favor, ingrese su nombre.");
    return false; // Evitar el envío del formulario
  }
  const apellido = document.getElementById("apellido").value;
  if (apellido === "") {
    alert("Por favor, ingrese su apellido.");
  }
  const dni = document.getElementById("dni").value;
  if (dni === "") {
    alert("Por favor, ingrese su DNI.");
  }

  const fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
  if (fecha_nacimiento === "") {
    alert("Por favor, ingrese su fecha de nacimiento.");
  }

  const nacionalidad = document.getElementById("nacionalidad").value;
  if (nacionalidad === "") {
    alert("Por favor, ingrese su nacionalidad.");
  }
  const email = document.getElementById("email").value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, ingrese un correo electrónico válido.");
    return false; // Evitar el envío del formulario
  }
  const celular = document.getElementById("celular").value;
  // una vez capturados los inputs guardamos la info en un objeto------

  var dataForm = {
    id: index,
    nombre: nombre,
    apellido: apellido,
    dni: dni,
    fecha_nacimiento: fecha_nacimiento,
    nacionalidad: nacionalidad,
    email: email,
    celular: celular,
  };

  ////----- antes de guardar en localStorage consultamos si hay datos anteriores-------
  var datosAnteriores = localStorage.getItem("alumnos");
  ///// si hay datos los parseamos y sino creamos un array donde guardarlos.
  if (datosAnteriores) {
    listAntArray = JSON.parse(datosAnteriores);
  } else {
    var listAntArray = [];
  }

  listAntArray.push(dataForm); //agregamos los nuevos datos con un push al array
  localStorage.setItem("alumnos", JSON.stringify(listAntArray));
  console.log(listAntArray); // metemos los datos a localStorage.
  //llamamos a la funcion clear para que limpie los campos del formulario despues de enviarlos.
  var txt;
  if (confirm("Seguro que desar guardar los datos")) {
    txt = "";
    clear();
    
  } else {
    txt = "prueba 3";
  }
 
}
// para limpiar el formulario despues de enviar la informacion.
function clear() {
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("dni").value = "";
  document.getElementById("fecha_nacimiento").value = "";
  document.getElementById("nacionalidad").value = "";
  document.getElementById("email").value = "";
  document.getElementById("celular").value = "";
  document.getElementById("carrera").value = "";
  document.getElementById("cuatrimestre").value = "";
}

//obtener ID siguiente:
function obtenerId() {
  const listadoAlumnos = localStorage.getItem("alumnos");
  if (listadoAlumnos) {
    const listadoArray = JSON.parse(listadoAlumnos);
    if (listadoArray.length > 0) {
      index = listadoArray[listadoArray.length - 1].id + 1;
    } else {
      index = 1;
    }
  } else {
    index = 1;
  }
}